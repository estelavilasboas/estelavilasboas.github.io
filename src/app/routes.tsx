import * as React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { Route } from '@app/core/route';
import { AboutMePage } from './modules/about-me';

const history = createBrowserHistory();

export const Routes: React.FC = () => {
  return (
    <Router history={history}>
      <Route
        path={'/'}
        component={AboutMePage}
        exact
      />
    </Router>
  );
};