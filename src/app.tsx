import React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import { Dashboard } from './containers/dashboard';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={Dashboard} />
  </Switch>
));
