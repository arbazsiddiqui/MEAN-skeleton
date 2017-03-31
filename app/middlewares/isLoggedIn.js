//middleware to check if the request is authenticated

module.exports = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
};