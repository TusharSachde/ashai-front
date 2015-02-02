var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice']);

phonecatControllers.controller('explore',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Explore projects");
        TemplateService.title = $scope.menutitle;
        TemplateService.content = 'views/explore.html';
        TemplateService.header = 'views/header.html';
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
     TemplateService.header='views/headertext.html';
        $scope.title="Join The PFO Army";
        TemplateService.content = 'views/proarmy.html';
        $scope.navigation = NavigationService.getnav();
    }
);
phonecatControllers.controller('aboutUs',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
//        $scope.menutitle = NavigationService.makeactive("Join the pro army");
        TemplateService.title = $scope.menutitle;
       TemplateService.header='views/headertext.html';
        $scope.title="About Us";
        TemplateService.content = 'views/aboutus.html';
        $scope.navigation = NavigationService.getnav();
    
    }
);
phonecatControllers.controller('ExplorestuckHeader',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
//        $scope.menutitle = NavigationService.makeactive("Join the pro army");
//        TemplateService.title = $scope.menutitle;
        TemplateService.content = 'views/ExplorestuckHeader.html';
     TemplateService.header='views/headerblack.html';
        $scope.navigation = NavigationService.getnav();
//    $scope.display="About Us";
    }
);
phonecatControllers.controller('campaign',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
//        $scope.menutitle = NavigationService.makeactive("Join the pro army");
        TemplateService.title = $scope.menutitle;
        TemplateService.content = 'views/campaign.html';
          TemplateService.header='views/headertext.html';
        $scope.navigation = NavigationService.getnav();
//    $scope.display="About Us";
    }
);
phonecatControllers.controller('myprofile',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
//        $scope.menutitle = NavigationService.makeactive("Join the pro army");
 TemplateService.title = $scope.menutitle;
 TemplateService.content = 'views/myprofile.html';
     TemplateService.header='views/headerblack.html';
$scope.navigation = NavigationService.getnav();
//    $scope.display="About Us";
    }
);

phonecatControllers.controller('rewards',
    function($scope,$location, TemplateService, NavigationService) {
        $scope.template = TemplateService;
//        $scope.menutitle = NavigationService.makeactive("Join the pro army");
       TemplateService.header='views/headerblack.html';
        TemplateService.title = $scope.menutitle;
        TemplateService.content = 'views/rewards.html';
       $scope.navigation = NavigationService.getnav();

    }
);

phonecatControllers.controller('headerctrl',
    function($scope, TemplateService) {
        $scope.template = TemplateService;
    }
);