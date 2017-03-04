const express = require('express');
const Promise = require('bluebird');
const bodyParser = require('body-parser');
const app = express();
const users = require('./users');
const mongoClient = require('mongodb').mongoClient;
const monk = require('monk');
const db = monk('localhost:27017/aubgsurvival', console.log('DB connected'));
const corser = require('corser');

app.use((req, res, next) => {
    req.db = db;
    next();
});

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
app.get('/api/users/login', users.login);

app.listen(3001, console.log('Listening on the port 3001'));
