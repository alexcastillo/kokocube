'use strict'

angular.module('Cube', [])
  .directive('cube', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/cube/cube.html',
      css: 'components/cube/cube.css'
    }
  });