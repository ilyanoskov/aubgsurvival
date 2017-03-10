import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App/App.js';
import LoginPage from './components/Login/login.js';
import Registration from './components/Registration/register.js';
import NotFound from './components/NotFound/NotFound.js';
import Greetings from './components/Greetings/hello.js';
import About from './components/About/about'
import KillPage from './components/Kill/KillPage'

export default (
    <Route path="/" component={App} >
        <IndexRoute component={Greetings} />
    <Route path="register" component={Registration} />
    <Route path="login" component={LoginPage} />
    <Route path="about" component={About} />
    <Route path="kill" component={KillPage} />
    <Route path="*" component={NotFound} />
    </Route>
)
