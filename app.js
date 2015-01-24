'use strict'

var App = angular.module('App', ['Koko','ngRoute','door3.css','mgcrea.ngStrap']);

App.config(function($routeProvider) {
  
  $routeProvider
    .when('/game', {
      templateUrl: 'pages/game/game.html',
      controller: 'gameCtrl',
      css: 'pages/game/game.css'
    })
    .when('/results', {
      templateUrl: 'pages/results/results.html',
      controller: 'resultsCtrl',
      css: 'pages/results/results.css'
    })
    .when('/about', {
      templateUrl: 'pages/about/about.html',
      controller: 'aboutCtrl',
      css: 'pages/about/about.css'
    })
    .when('/share', {
      templateUrl: 'pages/share/share.html',
      controller: 'shareCtrl',
      css: 'pages/share/share.css'
    })
    .otherwise({
      redirectTo: '/tasks'
    });

});