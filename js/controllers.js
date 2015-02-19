var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice','ui.bootstrap']);

phonecatControllers.controller('home',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("");
        $scope.title = "Home";
        TemplateService.content = 'views/home.html';
        TemplateService.header = 'views/header.html';
        $scope.navigation = NavigationService.getnav();

          $scope.myInterval = 5000;
          $scope.slides =[{
              "image":"images/image1.png",
              "name":"first Slide"
          },{
              "image":"images/image2.png",
              "name":"second Slide"
          }];
        
        $scope.slides[0].active = "active";

});
    

phonecatControllers.controller('works',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("How it works");
        $scope.title = "How it works";
        TemplateService.content = 'views/works.html';
        TemplateService.header = 'views/headertext.html';
        $scope.navigation = NavigationService.getnav();
    }
);

phonecatControllers.controller('proarmy',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Join the pro army");
        TemplateService.header = 'views/headertext.html';
        $scope.title = "Join The PFO Army";
        TemplateService.content = 'views/proarmy.html';
        $scope.navigation = NavigationService.getnav();
    }
);
phonecatControllers.controller('aboutUs',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.header = 'views/headertext.html';
        $scope.title = "About Us";
        TemplateService.content = 'views/aboutus.html';
        $scope.navigation = NavigationService.getnav();

    }
);


phonecatControllers.controller('blog',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.header = 'views/headertext.html';
        $scope.title = "blog";
        TemplateService.content = 'views/blog.html';
        $scope.navigation = NavigationService.getnav();

    }
);


phonecatControllers.controller('Explore',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Explore projects");
        $scope.title = "Explore projects";
        TemplateService.content = 'views/explore.html';
        TemplateService.header = 'views/headerblack.html';
        $scope.navigation = NavigationService.getnav();
    }
);
phonecatControllers.controller('campaign',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.title = "Campaign";
        TemplateService.content = 'views/campaign.html';
        TemplateService.header = 'views/HeaderCampaign.html';
        $scope.navigation = NavigationService.getnav();
        //    $scope.display="About Us";
    }
);
phonecatControllers.controller('myprofile',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.title = "My Profile";
        TemplateService.content = 'views/myprofile.html';
        TemplateService.header = 'views/headerblack.html';
        $scope.navigation = NavigationService.getnav();
        //    $scope.display="About Us";
    }
);

phonecatControllers.controller('rewards',
    function($scope, $location, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.header = 'views/headerblack.html';
        $scope.title = "Rewards";
        TemplateService.content = 'views/rewards.html';
        $scope.navigation = NavigationService.getnav();

    }
);

phonecatControllers.controller('TermsAndCondition',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.header = 'views/headertext.html';
        $scope.title = "Terms & Condition";
        TemplateService.content = 'views/terms.html';
        $scope.navigation = NavigationService.getnav();

    }
);
phonecatControllers.controller('workwithus',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.header = 'views/headertext.html';
        $scope.title = "Work With Us";
        TemplateService.content = 'views/workwithus.html';
        $scope.navigation = NavigationService.getnav();

    }
);

phonecatControllers.controller('Contactus',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.header = 'views/headertext.html';
        $scope.title = "Contact Us";
        TemplateService.content = 'views/Contactus.html';
        $scope.navigation = NavigationService.getnav();

    }
);

phonecatControllers.controller('thankyou',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.header = 'views/headertext.html';
     $scope.title = "thank you";
       TemplateService.content = 'views/thankyou.html';
   $scope.navigation = NavigationService.getnav();

    }
);



phonecatControllers.controller('Teampage',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.header = 'views/headertext.html';
        $scope.title = "Our Team";
        TemplateService.content = 'views/teampage.html';
        $scope.navigation = NavigationService.getnav();

    }
);
phonecatControllers.controller('headerctrl',
    function($scope, TemplateService) {
        $scope.template = TemplateService;
    }
);
