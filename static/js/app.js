'use strict';

// Declare app level module which depends on views, and components
var personalWebsiteApp = angular.module('personalWebsite', [
  'ngRoute',
  'ngSanitize',
  'personalWebsiteControllers',
  'angulartics',
  'angulartics.google.analytics'
]);

personalWebsiteApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'templates/about.html',
            controller:"HomeCtrl"
        }).
        when('/portfolio', {
            templateUrl: 'templates/portfolio.html',
            controller:"PortfolioCtrl"
        }).
        when('/praca', {
            templateUrl: 'templates/praca.html',
            controller: 'PracaCtrl'
        }).
        otherwise({
          redirectTo: '/'
        });

  }]);
