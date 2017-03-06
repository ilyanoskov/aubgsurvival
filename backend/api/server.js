const express = require('express');
const Promise = require('bluebird');
const bodyParser = require('body-parser');
const app = express();
const users = require('./users');
const mongoClient = require('mongodb').mongoClient;
const monk = require('monk');
const db = monk('localhost:27017/aubgsurvival', console.log('DB connected'));
const corser = require('corser');
const auth = require('./auth');

app.use((req, res, next) => {
    req.db = db;
    next();
});
//allows for cross-domain requests
app.use(corser.create());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/api', (req, res) => {
    console.log(req.body);
    res.send('OK');
});

//users API

app.get('/api/users', users.users);
app.post('/api/users/register', users.register);

app.post('/api/auth', auth.auth);

app.listen(3001, console.log('Listening on the port 3001'));
