const express = require('express');
const Promise = require('bluebird');
const bodyParser = require('body-parser');
const app = express();
const users = require('./users');
const monk = require('monk');
const db = monk('localhost:27017/aubgsurvival', console.log('DB connected'));
const corser = require('corser');
const auth = require('./auth');
const kill = require('./kill');
const authenticate = require('./middleware/authenticate.js').auth;

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

app.use((error, request, response, next) => {
    response.status(400).send('Oops there was an error, ask administrator');
})

app.post('/api', (req, res) => {
    console.log(req.body);
    res.send('OK');
});

//users API

app.get('/api/users', users.users);
app.post('/api/users/register', users.register);

//Auth
app.post('/api/auth', auth.auth);

//App functionality
app.post('/api/kill', authenticate, kill.kill);
app.listen(3001, console.log('Listening on the port 3001'));
