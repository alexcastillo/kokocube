'use strict'

App.controller('gameCtrl', function ($scope, $rootScope, $location, $routeParams, $filter, kokoConst) {

  $scope.questions = angular.copy(kokoConst.questions);

  $scope.nextQuestion = function () {
    $location.path('game/' + ($scope.currentStep + 1));
  };

  $scope.prevQuestion = function () {
    $location.path('game/' + ($scope.currentStep - 1));
  };

  $scope.goToResults = function () {
    $location.path('results');
  };

  $scope.updateStep = function () {
    $scope.currentStep = parseInt($routeParams.id);
    $scope.question = $filter('filter')($scope.questions, { id: $routeParams.id })[0];
  };

  $scope.updateStep();

  $rootScope.$on('$routeChangeSuccess', function () {
    $scope.updateStep();
  });
  
});