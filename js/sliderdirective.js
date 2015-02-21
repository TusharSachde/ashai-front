var MyApp = angular.module('MyApp', []);

MyApp.controller('MainCtrl', function($scope) {
    $scope.name = 'First ';
});

MyApp.directive('exampleDirective', function() {
    return {
        restrict: 'E',
        template: '<p>Hello {{name}}!</p>',
        controller: function($scope, $element) {
            $scope.name = $scope.name + "Second ";
        },
        link: function(scope, el, attr) {
            scope.name = scope.name + "Third ";
        }
    }
});

MyApp.directive('scrollPosition', function($window) {
    return {
        scope: {
            scroll: '=scrollPosition'
        },
        link: function(scope, element, attrs) {
            var windowEl = angular.element($window);
            var handler = function() {
                scope.scroll = windowEl.scrollTop();
            }
            windowEl.on('scroll', scope.$apply.bind(scope, handler));
            handler();
        }
    };
});