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
         when('/aboutUs', {
            templateUrl: 'views/template.html',
            controller: 'aboutUs'
        }).
         when('/ExplorestuckHeader', {
            templateUrl: 'views/template.html',
            controller: 'ExplorestuckHeader'
        }).
        when('/ExplorestuckHeader', {
            templateUrl: 'views/template.html',
            controller: 'ExplorestuckHeader'
        }).
         when('/campaign', {
            templateUrl: 'views/template.html',
            controller: 'campaign'
        }).
        when('/myprofile', {
            templateUrl: 'views/template.html',
            controller: 'myprofile'
        }).
         when('/rewards', {
            templateUrl: 'views/template.html',
            controller: 'rewards'
        }).
        otherwise({
            redirectTo: '/explore'
        });
  }]);