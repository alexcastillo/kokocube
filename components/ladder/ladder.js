'use strict'

angular.module('Ladder', [])
  .directive('ladder', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/ladder/ladder.html',
      css: 'components/ladder/ladder.css'
    }
  });