'use strict'

App.controller('startCtrl', function ($scope, $location, $sessionStorage) {

  $scope.startGame = function () {
    $sessionStorage.$reset();
    $location.path('/game/0');
  };

});