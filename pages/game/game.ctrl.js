'use strict'

App.controller('gameCtrl', function ($scope, $rootScope, $location, $routeParams, $sessionStorage, kokoConst) {

  $scope.$storage = $sessionStorage.$default({
    questions: kokoConst.questions
  });

  $scope.activeId = parseInt($routeParams.id);

  $scope.$storage.question = $scope.$storage.questions[$routeParams.id-1]

  $scope.nextQuestion = function () {
    $location.path('game/' + ($scope.activeId + 1));
  };

  $scope.prevQuestion = function () {
    $location.path('game/' + ($scope.activeId - 1));
  };

  $scope.goToResults = function () {
    $location.path('results');
  };
  
});