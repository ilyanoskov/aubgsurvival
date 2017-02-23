const express = require('express');
const Promise = require('bluebird');
const bodyParser = require('body-parser');
const app = express();
const users = require('./users');
const mongoClient = require('mongodb').mongoClient;
const monk = require('monk');
const db = monk('localhost:27017/aubgsurvival', console.log('DB connected'));

app.use((req, res, next) => {
    req.db = db;
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send('OK');
});


//users API

app.get('/users', users.users);
app.put('/users/register', users.register);
app.get('/users/login', users.login);

app.listen(3001, console.log('Listening on the port 3001'));
