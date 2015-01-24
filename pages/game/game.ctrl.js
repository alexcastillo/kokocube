'use strict'

App.controller('gameCtrl', function ($scope, kokoConst) {

  $scope.questions = kokoConst.questions;

  $scope.question = $scope.questions[0];

});