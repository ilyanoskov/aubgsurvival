const express = require('express');
const Promise = require('bluebird');
const bodyParser = require('body-parser');
const app = express();
const users = require('./users');
const monk = require('monk');
const corser = require('corser');
const auth = require('./auth');
const kill = require('./kill');
const authenticate = require('./middleware/authenticate.js').auth;
const events = require('./events');

const victims = require('./victims');

const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/aubgsurvival');

//wrap DB inside req for easy database retrieval
app.use((req, res, next) => {
    req.db = db;
    next();
});


//allows for cross-domain requests AND authorization headers
app.use(corser.create({
    supportsCredentials : true,
    requestHeaders: corser.simpleRequestHeaders.concat(["Authorization"])
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//error wrapper, courtesy to Spanish guys
app.use((error, request, response, next) => {
    response.status(400).send('Oops there was an error, ask administrator');
    console.log(error);
    next();
})

app.post('/api', (req, res) => {
    console.log(req.body);
    res.send('OK');
});

//users API

app.get('/api/users', users.users);
app.post('/api/users/register', users.register);
app.delete('/api/users', users.delete); //DEV ONLY!
app.get('/api/users/personal', authenticate, users.personal);

//Auth
app.post('/api/auth', auth.auth);


//events api
app.get('/api/events', events.get);
app.delete('/api/events', events.erase);

//gameplay
app.post('/api/assign', victims.initialAssign);
app.post('/api/kill', authenticate, kill.kill);


app.listen(3001, console.log('Listening on the port 3001'));
