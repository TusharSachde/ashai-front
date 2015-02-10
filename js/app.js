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
        when('/home', {
            templateUrl: 'views/template.html',
            controller: 'home'
        }).
        when('/works', {
            templateUrl: 'views/template.html',
            controller: 'works'
        }).
         when('/workwithus', {
            templateUrl: 'views/template.html',
            controller: 'workwithus'
        }).
        
        when('/contactus', {
            templateUrl: 'views/template.html',
            controller: 'Contactus'
        }).
        when('/proarmy', {
            templateUrl: 'views/template.html',
            controller: 'proarmy'
        }).
         when('/aboutUs', {
            templateUrl: 'views/template.html',
            controller: 'aboutUs'
        }).
         when('/explore', {
            templateUrl: 'views/template.html',
            controller: 'Explore'
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
        when('/termsandcondition', {
            templateUrl: 'views/template.html',
            controller: 'TermsAndCondition'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);