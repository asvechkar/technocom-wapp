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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope){
    $rootScope.sidebar_class = '';

    $rootScope.toggle_sidebar = function(){
      if ($rootScope.sidebar_class === '') {
        $rootScope.sidebar_class = 'sidebar-collapsed';
      }
      else {
        $rootScope.sidebar_class = '';
      }
    }
  });
