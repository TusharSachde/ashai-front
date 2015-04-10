// JavaScript Document

var frontend="http://www.powerforone.org/";
var backend="http://www.powerforone.org/admin/";

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
          when('/forgot', {
            templateUrl: 'views/template.html',
            controller: 'forgot'
        }).
         when('/fbpopup', {
            templateUrl: 'views/popup_template.html',
            controller: 'fbpopup'
        }).
        
        when('/blog', {
            templateUrl: 'views/template.html',
            controller: 'blog'
        }).
        
         when('/bloginner/:id', {
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


firstapp.directive('myYoutube', function($sce) {
  return {
    restrict: 'EA',
    scope: { code:'=' },
    replace: true,
    template: '<iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe>',
    link: function (scope) {
        console.log('here');
        scope.$watch('code', function (newVal) {
           if (newVal) {
               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
           }
        });
    }
  };
});


firstapp.filter('categoryimagepath', function () {
    return function (input) {
        if (input == null || input == '') {
            return frontend+"images/categoryimg/childwelfare.jpg";
        } else {
            return backend+"uploads/" + input;
        }
    };
});

firstapp.filter('profileimagepath', function () {
    return function (input) {
        if (input == null || input == '') {
            return frontend+"images/dp.jpg";
        } else {
            return input;
        }
    };
});

firstapp.filter('testimonialimagepath', function () {
    return function (input) {
        if (input == null || input == '') {
            return frontend+"images/face.png";
        } else {
            return backend+"uploads/" + input;
        }
    };
});

firstapp.filter('projectbannerimagepath', function () {
    return function (input) {
        if (input == null || input == '') {
            return frontend+"images/salaam_bombay.png";
        } else {
            return backend+"uploads/" + input;
        }
    };
});

firstapp.filter('cardimageimagepath', function () {
    return function (input) {
        if (input == null || input == '') {
            return frontend+"images/salaam_bombay.png";
        } else {
            return backend+"uploads/" + input;
        }
    };
});

firstapp.filter('bannerimagepath', function () {
    return function (input) {
        if (input == null || input == '') {
            return frontend+"images/salaam_bombay.png";
        } else {
            if(input == "learn_more.png"){
                return "images/backgrounds/"+input;
            }else{
            return backend+"uploads/" + input;
            }
        }
    };
});

firstapp.filter('ngoimagepath', function () {
    return function (input) {
        if (input == null || input == '') {
            return frontend+"images/face.png";
        } else {
            return backend+"uploads/" + input;
        }
    };
});

firstapp.filter('couponimagepath', function () {
    return function (input) {
        if (input == null || input == '') {
            return frontend+"images/pf_logo.png";
        } else {
            return backend+"uploads/" + input;
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

firstapp.run( function($rootScope, $location,$window) {
   $rootScope.$watch(function() { 
      return $location.path(); 
    },
    function(a){  
      $window.scrollTo(0,0);
    });
});
//firstapp.directive("chat", function() {
//    return {
//        restrict: "E",
//        replace: "true",
//        templateUrl: "templates/chat1.html"
//    }
//})
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