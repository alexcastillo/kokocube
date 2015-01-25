'use strict'

App.controller('aboutCtrl', function ($scope, $location, $sessionStorage) {

  $scope.startGame = function () {
    $sessionStorage.$reset();
    $location.path('/game/0');
  };

});