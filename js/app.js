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
        
        
        when('/blog', {
            templateUrl: 'views/template.html',
            controller: 'blog'
        }).
        
        when('/login', {
            templateUrl: 'views/template.html',
            controller: 'login'
        }).
        
        
          when('/register', {
            templateUrl: 'views/template.html',
            controller: 'register'
        }).
        
        when('/checkout', {
            templateUrl: 'views/template.html',
            controller: 'checkout'
        }).
        
        when('/faq', {
            templateUrl: 'views/template.html',
            controller: 'faq'
        }).
        
        
         when('/workwithus', {
            templateUrl: 'views/template.html',
            controller: 'workwithus'
        }).
         when('/teampage', {
            templateUrl: 'views/template.html',
            controller: 'Teampage'
        }).
        
         when('/policy', {
            templateUrl: 'views/template.html',
            controller: 'policy'
        }).
        
         when('/thankyou', {
            templateUrl: 'views/template.html',
            controller: 'thankyou'
        }).
        when('/contactus', {
            templateUrl: 'views/template.html',
            controller: 'Contactus'
        }).
        when('/fellowship', {
            templateUrl: 'views/template.html',
            controller: 'fellowship'
        }).
         when('/aboutUs', {
            templateUrl: 'views/template.html',
            controller: 'aboutUs'
        }).
         when('/explore/:id', {
            templateUrl: 'views/template.html',
            controller: 'Explore'
        }).
        when('/campaign/:id', {
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
            controller: 'termsandcondition'
        }).
        otherwise({
            redirectTo: '/home'
        });
      
    
  }]);

firstapp.directive('wrapOwlcarousel', function () {  
    return {  
        restrict: 'E',  
        link: function (scope, element, attrs) {  
            var options = scope.$eval($(element).attr('data-options'));  
            $(element).owlCarousel(options);  
        }  
    };  
});  

firstapp.filter('fourletter', function () {
        return function (input) {
            return input.substring(0, 5);

        };
    });