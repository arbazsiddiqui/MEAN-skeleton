var secret = require('../secret');
module.exports = {
  'googleAuth': {
    'clientID': secret.googleClientID,
    'clientSecret': secret.googleClientSecret,
    'callbackURL': 'http://localhost:8080/auth/google/callback'
  },
  'facebookAuth': {
    'clientID': secret.facebookClientID,
    'clientSecret': secret.facebookClientSecret,
    'callbackURL': 'http://localhost:8080/auth/facebook/callback'
  }
};