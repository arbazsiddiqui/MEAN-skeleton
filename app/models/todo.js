var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  text: String,
  status: Boolean,
  email: String
});

var Todo = mongoose.model('Todo', todoSchema);

exports.getAll = function (email, callback) {
  Todo.find({email: email}, function (err, docs) {
    if (err) {
      console.log(err);
      return callback(null)
    }
    return callback(docs)
  })
};

exports.addTodo = function (text, email, callback) {
  Todo.create({text: text, email: email, status: false}, function (err, doc) {
    if (err) {
      console.log(err);
      return callback(null)
    }
    return callback(doc)
  })
};

exports.toggleTodo = function (todoId, status, callback) {
  Todo.findByIdAndUpdate(
    todoId,
    {status: status}, function (err, tododoc) {
      if (err) {
        console.log(err);
        return callback(null)
      }
      return callback(tododoc)
    }
  )
};

exports.deleteTodo = function (todoId, callback) {
  Todo.findByIdAndRemove(
    todoId, function (err) {
      if (err) {
        console.log(err);
        return callback(null)
      }
      return callback("success");
    })
};