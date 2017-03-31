# Mean Skeleton

A Todo App built using MEAN stack, containing social and local auth, CRUD and best practices to organise codebase.


Authentication is done using passport.js (session based authentication) and is handled by server, Angular getting bootstrapped after the authentication has been finished. 

---

### Getting Started
* Perform a clone of this repo `git clone https://github.com/arbazsiddiqui/MEAN-skeleton`
* Install [Mongodb](https://www.mongodb.com/download-center#community) on your system.
* Install the required packages `npm install`
* If you want social auth obtain your [google](https://console.cloud.google.com/) and [facebook](https://developers.facebook.com/) ID's and secret's.
* Create a secret.js file in the main project folder :
```javascript
module.exports = {
  googleClientID : 'googleClientID',
  googleClientSecret : 'googleClientSecret',
  facebookClientID : 'facebookClientID',
  facebookClientSecret : 'facebookClientSecret',
  sessionSecret : 'sessionSecret'
};
```
* Run the server `node server`
* Open http://localhost:8080