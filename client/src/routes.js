import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App/App.js';
import Login from './components/Login/login.js';
import Registration from './components/Registration/register.js';
import NotFound from './components/NotFound/NotFound.js';
import About from './components/About/about.js';

const Routes = (props) => {
    return(
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
    <Route path="/Register" component={Registration} />
    <Route path="*" component={NotFound} />
  </Router>
    );
};

export default Routes;
