angular.module('todoService', [])
  .factory('Todo', function ($http) {
    var todoFactory = {};
    var temp = ["arbaz", "siddiqui"];
    todoFactory.getUser = function () {
      return $http.get('/me');
    };

    todoFactory.all = function () {
      return temp;
    };

    todoFactory.getAll = function () {
      return $http.get('/todo');
    };

    todoFactory.addTodo = function (body) {
      return $http.post('/todo/addtodo', body);
    };

    todoFactory.toggleTodo = function (body) {
      return $http.post('/todo/toggletodo', body);
    };

    todoFactory.deleteTodo = function (body) {
      return $http.post('/todo/deletetodo', body);
    };

    todoFactory.logout = function () {
      return $http.post('/logout');
    };
    
    return todoFactory;
  });

