'use strict'

angular.module('Storm', [])
  .directive('storm', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/storm/storm.html',
      css: 'components/storm/storm.css'
    }
  });