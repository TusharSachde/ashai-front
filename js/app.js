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
        
         when('/bloginner', {
            templateUrl: 'views/template.html',
            controller: 'bloginner'
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
         when('/aboutUs/:id', {
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

firstapp.filter('categoryimagepath', function () {
    return function (input) {
        if (input == null || input == '') {
            return "http://wohlig.co.in/angular-powerforone/images/categoryimg/childwelfare.jpg";
        } else {
            return "http://wohlig.co.in/powerforone/uploads/" + input;
        }
    };
});

firstapp.filter('testimonialimagepath', function () {
    return function (input) {
        if (input == null || input == '') {
            return "http://wohlig.co.in/angular-powerforone/images/face.png";
        } else {
            return "http://wohlig.co.in/powerforone/uploads/" + input;
        }
    };
});

firstapp.filter('projectbannerimagepath', function () {
    return function (input) {
        if (input == null || input == '') {
            return "http://wohlig.co.in/angular-powerforone/images/salaam_bombay.png";
        } else {
            return "http://wohlig.co.in/powerforone/uploads/" + input;
        }
    };
});

firstapp.filter('cardimageimagepath', function () {
    return function (input) {
        if (input == null || input == '') {
            return "http://wohlig.co.in/angular-powerforone/images/salaam_bombay.png";
        } else {
            return "http://wohlig.co.in/powerforone/uploads/" + input;
        }
    };
});

firstapp.filter('bannerimagepath', function () {
    return function (input) {
        if (input == null || input == '') {
            return "http://wohlig.co.in/angular-powerforone/images/salaam_bombay.png";
        } else {
            if(input == "learn_more.png"){
                return "images/backgrounds/"+input;
            }else{
            return "http://wohlig.co.in/powerforone/uploads/" + input;
            }
        }
    };
});

firstapp.filter('ngoimagepath', function () {
    return function (input) {
        if (input == null || input == '') {
            return "http://wohlig.co.in/angular-powerforone/images/face.png";
        } else {
            return "http://wohlig.co.in/powerforone/uploads/" + input;
        }
    };
});

firstapp.filter('fourletter', function () {
        return function (input) {
            return input.substring(0, 5);

        };
    });

firstapp.filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    });

firstapp.filter('rawHtml', ['$sce', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };
}]);

function partitionarray(myarray, number) {
            var arrlength = myarray.length;
            var newarray = [];
            var j = -1;
            for (var i = 0; i < arrlength; i++) {
                if (i % number == 0) {
                    j++;
                    newarray[j] = [];
                }
                newarray[j].push(myarray[i]);
            }
            return newarray;
        };

var formvalidation = function(allvalidation) {
    var isvalid2 = true;
    for (var i = 0; i < allvalidation.length; i++) {
        console.log("checking");
        console.log(allvalidation[i].field);
        if (allvalidation[i].field == "" || !allvalidation[i].field) {
            allvalidation[i].validation = "ng-dirty";
            isvalid2 = false;
        }
    }
    return isvalid2;
};