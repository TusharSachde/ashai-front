var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice']);

phonecatControllers.controller('explore',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Explore projects");
        TemplateService.title = $scope.menutitle;
        TemplateService.content = 'views/explore.html';
        $scope.navigation = NavigationService.getnav();
    }
);
phonecatControllers.controller('works',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("How it works");
        TemplateService.title = $scope.menutitle;
        TemplateService.content = 'views/works.html';
        $scope.navigation = NavigationService.getnav();
    }
);
phonecatControllers.controller('proarmy',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Join the pro army");
        TemplateService.title = $scope.menutitle;
        TemplateService.content = 'views/proarmy.html';
        $scope.navigation = NavigationService.getnav();
    }
);

phonecatControllers.controller('headerctrl',
    function($scope, TemplateService) {
        $scope.template = TemplateService;
    }
);