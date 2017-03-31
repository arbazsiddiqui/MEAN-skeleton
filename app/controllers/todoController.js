var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');
var isLoggedIn = require('../middlewares/isLoggedIn');
var authenticatedUsing = require('../helpers/authenticatedUsing');

router.get('/', isLoggedIn, function (req, res) {
  authUser = authenticatedUsing(req);
  Todo.getAll(authUser.email, function (todos) {
    return res.send(todos);
  })
});

router.post('/addtodo', isLoggedIn, function (req, res) {
  authUser = authenticatedUsing(req);
  var text = req.body.text;
  Todo.addTodo(text, authUser.email, function (todoDoc) {
    return res.send(todoDoc);
  })
});

router.post('/toggletodo', isLoggedIn, function (req, res) {
  var todoId = req.body.id;
  var status = req.body.status;
  Todo.toggleTodo(todoId, status, function (doc) {
    res.sendStatus(200);
  })
});

router.post('/deletetodo', isLoggedIn, function (req, res) {
  var todoId = req.body.id;
  Todo.deleteTodo(todoId, function (success) {
    res.sendStatus(200);
  })
});

module.exports = router;