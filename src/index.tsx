// eslint-disable-next-line import/no-unassigned-import
import 'reflect-metadata';

import React from 'react';

// eslint-disable-next-line import/no-unassigned-import
import '@assets/fonts/fonts.css';
import { createRoot, hydrateRoot } from 'react-dom/client';

import { configure } from '@app/configure-app';
import { FrontendEnvironmentVariables } from '@app/frontend-environment-variables';

import App from './App';
import reportWebVitals from './reportWebVitals';

// defined via html <script> tag:
// static - baked on webpack build
// ssr - injected during rendering on server
declare const __serializedVariables: FrontendEnvironmentVariables;

configure(__serializedVariables);

const container = document.getElementById('root');

const isSSR = container.hasChildNodes();

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (isSSR) {
  hydrateRoot(container, app);
} else {
  const root = createRoot(container);
  root.render(app);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
