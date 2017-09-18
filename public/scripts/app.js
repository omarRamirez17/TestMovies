'use strict';

/**
 * @ngdoc overview
 * @name prototipoApp
 * @description
 * # prototipoApp
 *
 * Main module of the application.
 */
angular.module('prototipoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    "com.2fdevs.videogular",
	  "com.2fdevs.videogular.plugins.controls",
	  "com.2fdevs.videogular.plugins.overlayplay",
	  "com.2fdevs.videogular.plugins.poster",
	  "com.2fdevs.videogular.plugins.buffering"
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'homeCtrl'
      })
      .when('/moviePlayer', {
        templateUrl: 'views/moviePlayer.html',
        controller: 'moviePlayerCtrl'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'historyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
