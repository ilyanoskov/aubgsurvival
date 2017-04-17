const express = require('express');
const Promise = require('bluebird');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const users = require('./users');
const auth = require('./auth');
const kill = require('./kill');
const authenticate = require('./middleware/authenticate.js').auth;
const events = require('./events');

const victims = require('./victims');

const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://heroku_lzw4c7z3:i04da3o2rood9kk7snh7174790@ds157809.mlab.com:57809/heroku_lzw4c7z3');

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

//allows for cross-domain requests AND authorization headers
/*app.use(corser.create({
    supportsCredentials : true,
    requestHeaders: corser.simpleRequestHeaders.concat(["Authorization"])
}));
*/

let originsWhitelist = [
  'http://localhost:3000',      //this is my front-end url for development
   'https://ilyanoskov.github.io/aubgsurvival'
];


app.use(cors({credentials: true, origin : 'https://ilyanoskov.github.io'}));

app.get('/api/users', users.users);
app.post('/api/users/register', users.register);
app.delete('/api/users', users.delete); //DEV ONLY!
app.get('/api/users/personal',  authenticate, users.personal);

//Auth
app.post('/api/auth',auth.auth);

//events api
app.get('/api/events',events.get);
app.delete('/api/events', events.erase);

//gameplay
app.post('/api/assign', victims.initialAssign);
app.post('/api/kill',authenticate, kill.kill);

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), console.log('Listening on the port ', app.get('port')));
