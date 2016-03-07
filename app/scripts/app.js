'use strict';

/**
 * @ngdoc overview
 * @name technocomWapp
 * @description
 * # technocomWapp
 *
 * Main module of the application.
 */
angular
  .module('technocomWapp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix("!");

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope){

    $rootScope.togglesidebar = false;

  });
