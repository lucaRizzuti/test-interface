'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  "ngMaterial",
  "ngAnimate",
  'myApp.home',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);





