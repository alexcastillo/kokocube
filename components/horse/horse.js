'use strict'

angular.module('Horse', [])
  .directive('horse', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/horse/horse.html',
      css: 'components/horse/horse.css'
    }
  });