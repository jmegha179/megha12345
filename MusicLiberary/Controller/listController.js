var a = angular.module('musicList', []);
a.controller('musicCtrl', function ($scope, $http) {
  $http.get("../Data/music.json")
    .then(function (response) {
      $scope.names = response.data;
    });
});

  