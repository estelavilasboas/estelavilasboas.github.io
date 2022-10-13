import {
  addPlugins,
  addRule,
  createConfig,
  onCondition,
  setDevServer,
  setEntry,
  setOutput,
  setProperty,
  setResolve,
} from '@taqtile/ts-webpack-builder';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as path from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { IgnorePlugin } from 'webpack';
import * as dotenv from 'dotenv';
import nodeExternals from 'webpack-node-externals';

import { getFrontendEnvironmentVariables } from './src/app/frontend-environment-variables';

dotenv.config({ path: process.env.ENV_FILE ?? '.env' });

// reverting ts-node config to use the correct file
process.env.TS_NODE_PROJECT = '';

const isProduction = process.env.NODE_ENV === 'production';

const commonConfig = [
  setProperty('mode', isProduction ? 'production' : 'development'),
  setProperty('devtool', isProduction ? 'source-map' : 'cheap-module-source-map'),
  setProperty('cache', {
    type: 'filesystem',
  }),
  onCondition(!isProduction, [
    setDevServer({
      static: {
        directory: path.join(__dirname, 'public'),
      },
      port: 4000,
      host: '0.0.0.0',
      hot: true,
      historyApiFallback: true,
      allowedHosts: 'all',
      open: true,
    }),
    setProperty('watchOptions', {
      aggregateTimeout: 300,
      poll: 1000,
    }),
  ]),
  // GRAPHQL
  addRule({
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader',
  }),
  // TS
  setResolve({ extensions: ['.ts', '.tsx', '.js', '.json', '.gql', '.graphql'], plugins: [new TsconfigPathsPlugin()] }),
  addRule({
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: {
      // disable type checker - we will use it in fork plugin
      transpileOnly: true,
    },
  }),
  // CSS
  addRule(/\.css$/i, [MiniCssExtractPlugin.loader, 'css-loader']),
  addPlugins(new MiniCssExtractPlugin({ filename: 'assets/[name].css' })),
  addRule({
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    type: 'asset',
    parser: { dataUrlCondition: { maxSize: 10000 } },
  }),
  addRule({ test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, type: 'asset/resource' }),
  addRule({ test: /\.(jpeg|jpg|png|gif|svg)?$/, type: 'asset/resource' }),
];

const clientConfig = createConfig([
  ...commonConfig,
  // HTML
  addPlugins(
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      inject: 'body',
      ...(process.env.SSR_ENABLED
        ? {}
        : {
            // Reminder: add new env entries in frontend-environment-variables.ts
            frontendEnvironmentVariables: JSON.stringify(getFrontendEnvironmentVariables(process.env)),
          }),
      // comments are used to keep html valid when not using webpack
      closeHtmlComment: '-->',
      openHtmlComment: '<!--',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/assets', to: 'assets' }],
    }),
  ),
  setOutput({
    path: path.resolve(__dirname, 'dist/public'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  }),
  setEntry({
    client: './src/index.tsx',
  }),
]);

const serverConfig = createConfig([
  ...commonConfig,
  setOutput({
    path: path.resolve(__dirname, 'dist/server'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  }),
  setEntry({
    server: './src/server.tsx',
  }),
  addPlugins(
    new IgnorePlugin({
      resourceRegExp: /canvas/,
      contextRegExp: /jsdom/,
    }),
  ),
  setProperty('target', 'node'),
  setProperty('externalsPresets', {
    node: true,
  }),
  setProperty('externals', [nodeExternals()]),
]);

module.exports = process.env.SSR_ENABLED ? [clientConfig, serverConfig] : clientConfig;
