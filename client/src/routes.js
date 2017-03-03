import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App/App.js';
import Login from './components/Login/login.js';
import Registration from './components/Registration/register.js';
import NotFound from './components/NotFound/NotFound.js';
import Greetings from './components/Greetings/hello.js';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={Greetings} />
    <Route path="register" component={Registration} />
    <Route path="*" component={NotFound} />
    </Route>
)
