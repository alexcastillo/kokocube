'use strict'

angular.module('Flowers', [])
  .directive('flowers', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/flowers/flowers.html',
      css: 'components/flowers/flowers.css'
    }
  });