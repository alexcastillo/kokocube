'use strict'

App.controller('resultsCtrl', function ($scope, $sessionStorage) {

  $scope.$storage = $sessionStorage.$default({
    results: {}
  });

  angular.forEach($scope.$storage.questions, function (question) {
    $scope.$storage.results[question.id] = question.answer;
  });

});