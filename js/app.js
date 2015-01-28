// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ngRoute',
  'phonecatControllers',
  'templateservicemod',
    'navigationservice'
]);

firstapp.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/explore', {
            templateUrl: 'views/template.html',
            controller: 'explore'
        }).
        when('/works', {
            templateUrl: 'views/template.html',
            controller: 'works'
        }).
        when('/proarmy', {
            templateUrl: 'views/template.html',
            controller: 'proarmy'
        }).
        otherwise({
            redirectTo: '/explore'
        });
  }]);