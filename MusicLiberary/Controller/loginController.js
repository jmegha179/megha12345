myApp.controller('loginCtrl', function ($scope, $window, $location) {
  $scope.check = function (form) {
    if (myForm.myName.value == "Megha" && myForm.pass.value == "Megha123") {
      window.location = '../partial/list.html';
    } else {
      alert("Error Password or Username");
    }
  }
});