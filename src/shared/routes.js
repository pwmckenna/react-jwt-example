import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import App from './components/App';
import Login from './components/smart/Login';
import NotFound from './components/Notfound';
import Home from './components/Home';

let Routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route name="login" path="login" handler={Login} />
    <NotFoundRoute name="not-found" handler={NotFound} />
  </Route>
);

export default Routes;
