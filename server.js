const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;
const database = require('./config/database');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const secret = require('./secret');
const session = require('client-sessions');

mongoose.connect(database.url, function(error) {
    if (error) {
        console.error(error);
        process.exit();
    }
    console.info('Connected successfully to MongoDB');
});
require('./config/passport')(passport);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('sessionSecret', secret.sessionSecret);

app.use(express.static(__dirname + '/public'));
app.use(cookieParser(secret.sessionSecret));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

var auth = require('./app/controllers/authController')(passport);
var todo = require('./app/controllers/todoController');

app.use(session({
  secret: secret.sessionSecret,
  cookieName: 'session'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', auth);
app.use('/todo', todo);

app.listen(port, function() {
    console.info('App listening on port', port);
});
