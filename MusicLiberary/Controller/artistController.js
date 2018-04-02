myApp.controller('artistCtrl', function ($scope, artistFactory) {
  $scope.item = artistFactory.getList().then(function (response) {
    $scope.item = response.data;
  })
});

 