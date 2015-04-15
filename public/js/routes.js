'use strict'; 

window.angular.module('SunShotApp').config(
  ['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      // For unmatched and default routes
      $urlRouterProvider.otherwise('/landing');
      $urlRouterProvider.when('/', '/landing');
      // Application routes
      $stateProvider
        .state('landing', {
          url: '/landing',
          templateUrl: '/views/landing.html'
        });

    }
  ]
);