angular.module('todoCtrl', [])
  .controller('TodoController', function ($scope, $rootScope, $window, Todo) {
    $scope.todoText = "";
    $scope.todoId = "";

    Todo.getAll()
      .success(function (data) {
        $scope.todos = data;
      });

    Todo.getUser()
      .success(function (data) {
        $rootScope.user = data;
      });

    $scope.logout = function () {
      Todo.logout()
        .success(function () {
          $window.location.href = "/";
        });
    };

    $scope.addTodo = function () {
      var params = {
        text: $scope.todoText
      };
      Todo.addTodo(params)
        .success(function (data) {
          $scope.todoText = "";
          $scope.todos.push(data);
        });
    };

    $scope.toggleTodo = function (todoId, status) {
      var params = {
        id: todoId,
        status: status
      };
      Todo.toggleTodo(params)
        .success(function (data) {
          for (i = 0; i < $scope.todos.length; i++) {
            if ($scope.todos[i]._id == todoId) {
              $scope.todos[i].status = status;
              break;
            }
          }
        })
    }

    $scope.deleteTodo = function (todoId) {
      var params = {
        id: todoId
      };
      Todo.deleteTodo(params)
        .success(function (data) {
          for (i = $scope.todos.length - 1; i >= 0; i--) {
            if ($scope.todos[i]._id == todoId) {
              $scope.todos.splice(i, 1);
              break;
            }
          }
        })
    }
  });