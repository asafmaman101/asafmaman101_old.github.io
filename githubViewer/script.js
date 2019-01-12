// Code goes here

(function() {

  var app = angular.module('githubViewer', []);

  app.controller('mainController', function($scope, $http) {

    $scope.messege = "Github Viewer";
    
    
    
    var onUserData = function(response) {
        $scope.user = response.data;
        $http.get($scope.user.repos_url).then(onReposData, onError);
      };
      
    var onReposData = function(response) {
      $scope.repos = response.data;
    }
      
    var onError = function(reason) {
        $scope.error = "Could not fetch the data..";
      }

    $scope.search = function(username) {
      $http.get('https://api.github.com/users/' + username).then(onUserData, onError);
    }

    $scope.username = "angular";

  });

}())