import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App/App.js';
import Login from './components/Login/login.js';
import Registration from './components/Registration/register.js';
import NotFound from './components/NotFound/NotFound.js';
import About from './components/About/about.js';
import Greetings from './components/Greetings/hello.js';

const Routes = (props) => {
    return(
  <Router {...props}>
    <Route path="/" component={App} >
        <IndexRoute component={Greetings} />
    <Route path="register" component={Registration} />
    <Route path="about" component={About} />
    <Route path="login" component={Login} />
    <Route path="*" component={NotFound} />
    </Route>
  </Router>
    );
};

export default Routes;
