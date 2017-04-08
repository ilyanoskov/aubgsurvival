import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App/App.js';
import LoginPage from './components/Login/login';
import Registration from './components/Registration/register';
import NotFound from './components/NotFound/NotFound';
import Index from './components/Index/IndexPage';
import About from './components/About/about'
import KillPage from './components/Kill/KillPage'

export default (
    <Route path="/" component={App} >
        <IndexRoute component={Index} />
    <Route path="register" component={Registration} />
    <Route path="login" component={LoginPage} />
    <Route path="about" component={About} />
    <Route path="kill" component={KillPage} />
    <Route path="*" component={NotFound} />
    </Route>
)
