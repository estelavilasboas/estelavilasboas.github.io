import React from 'react';

import crypto from 'crypto';
import * as dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import { JSDOM } from 'jsdom';
import path from 'path';
import * as ReactDomServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import { configure } from '@app/configure-server';
import { getFrontendEnvScriptContent, getFrontendEnvScript } from '@app/frontend-environment-variables';

import App from './App';

dotenv.config();

// create express application
const app = express();

const frontendEnvScriptContent = getFrontendEnvScriptContent(process.env);

const cspScriptHash = crypto.createHash('sha256').update(frontendEnvScriptContent).digest('base64');

configure({ app, cspScriptHash });

// serve static assets
app.get(/\.(js|css|map|ico|woff|ttf)$/, express.static(path.resolve(__dirname, '../public')));

app.get('*', async (req, res) => {
  // set header and status
  res.contentType('text/html');

  return res.send(await renderHtml(req.url));
});

const port = process.env.PORT || '9000';

app.listen(port, () => {
  console.log(`Express server started at http://localhost:${port}`);
});

const indexHTML = fs.readFileSync(path.resolve(__dirname, '../index.html'), {
  encoding: 'utf8',
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const renderHtml = async (_pathname: string) => {
  const sheet = new ServerStyleSheet();
  const emulatedDOM = new JSDOM(indexHTML);
  const emulatedDOMDocument = emulatedDOM.window.document;

  const appHTML = ReactDomServer.renderToString(sheet.collectStyles(<App />));

  emulatedDOMDocument
    .getElementsByTagName('body')[0]
    .insertAdjacentHTML('afterbegin', getFrontendEnvScript(frontendEnvScriptContent));

  emulatedDOMDocument.getElementById('root').insertAdjacentHTML('beforeend', appHTML);

  emulatedDOMDocument.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', sheet.getStyleTags());

  return emulatedDOM.serialize();
};
