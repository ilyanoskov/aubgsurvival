require('dotenv').config();
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
const stats = require('./statistics').stats;

const victims = require('./victims');

const mongoose = require('mongoose');
const db = mongoose
  .connect(
    process.env.MONGODB_URI,
    {
      promiseLibrary: Promise
    }
  )
  .then(() => {
    console.log(`--------------------`);
    console.log(`connected to the database`);
  });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//error wrapper, courtesy to Spanish guys
app.use((error, request, response, next) => {
  response.status(400).send('Oops there was an error, ask administrator');
  console.log(error);
  next();
});

app.post('/api', (req, res) => {
  console.log(req.body);
  res.send('OK');
});

let whitelist = [
  'http://localhost:3000', //this is my front-end url for development
  'https://augbsurvival.netlify.com',
  'https://augbsurvival.gq',
  'http://aubgsurvival.gq',
  'http://www.aubgsurvival.gq'
];

var corsOptions = {
  origin: function(origin, callback) {
    if (true) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};

app.use(cors({ credentials: true, origin: 'https://aubgsurvival.gq' }));

app.get('/api/users', users.users);
app.post('/api/users', users.usersData); //requires secret

// app.post('/api/users/register', users.register);
app.delete('/api/users', users.delete); //requires secret
app.delete('/api/user', users.deleteUser); //requires secret
app.get('/api/users/personal', authenticate, users.personal);

//Auth
app.post('/api/auth', auth.auth);

//events api
app.get('/api/events', events.get);
app.delete('/api/events', events.erase); //requires secret

//gameplay
app.post('/api/assign', victims.initialAssign); //requires secret
//app.post('/api/kill', authenticate, kill.kill);
app.get('/api/stats', stats);

app.set('port', process.env.PORT || 3001);

app.listen(
  app.get('port'),
  console.log('Listening on the port ', app.get('port'))
);
