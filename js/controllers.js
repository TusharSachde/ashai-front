var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'MyApp']);

phonecatControllers.controller('home',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Home");
        $scope.title = "Home";
        TemplateService.content = 'views/home.html';
        TemplateService.header = 'views/header.html';
        $scope.navigation = NavigationService.getnav();

        $scope.myInterval = 5000;
        $scope.slides = [{
            "image": "images/image1.png",
            "name": "first Slide"
        }, {
            "image": "images/image2.png",
            "name": "second Slide"
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
        TemplateService.title = "How It Works";
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
        TemplateService.title = "ProArmy";
        $scope.navigation = NavigationService.getnav();
    }
);
phonecatControllers.controller('aboutUs',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("About us");
        TemplateService.header = 'views/headertext.html';
        $scope.title = "About Us";
        TemplateService.content = 'views/aboutus.html';
        TemplateService.title = "About Us";
        $scope.navigation = NavigationService.getnav();

    }
);


phonecatControllers.controller('blog',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Blog");

        TemplateService.header = 'views/headertext.html';
        $scope.title = "blog";
        TemplateService.content = 'views/blog.html';
        TemplateService.title = "Blog";
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
        TemplateService.title = "Explore The Project ";
        $scope.navigation = NavigationService.getnav();
    }
);

phonecatControllers.controller('campaign',
    function($scope, TemplateService, NavigationService, $window, $location, $anchorScroll, anchorSmoothScroll) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Campaign");
        $scope.title = "Campaign";
        TemplateService.content = 'views/campaign.html';
        TemplateService.header = 'views/HeaderCampaign.html';
        TemplateService.title = "Campaign";
        $scope.navigation = NavigationService.getnav();

        angular.element($window).bind("scroll", function() {
            $scope.scrolled = this.pageYOffset;
            $scope.greatHeight = angular.element('.sliderheadercampaign').height() - angular.element('.headerzindex').height();
            $scope.$apply();
        });

        $scope.gotoElement = function(id) {
            $location.hash(id);
            //            $anchorScroll();
            anchorSmoothScroll.scrollTo(id);
        }

    }
);

phonecatControllers.controller('myprofile',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("My Profile");
        $scope.title = "My Profile";
        TemplateService.content = 'views/myprofile.html';
        TemplateService.header = 'views/headerblack.html';
        TemplateService.title = "My Profile";
        $scope.navigation = NavigationService.getnav();
        //    $scope.display="About Us";
    }
);

phonecatControllers.controller('rewards',
    function($scope, $location, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Rewards");
        TemplateService.header = 'views/headerblack.html';
        $scope.title = "Rewards";
        TemplateService.content = 'views/rewards.html';
        TemplateService.title = "Rewards";
        $scope.navigation = NavigationService.getnav();

    }
);

phonecatControllers.controller('TermsAndCondition',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Terms & Condition");
        TemplateService.header = 'views/headertext.html';
        $scope.title = "Terms & Condition";
        TemplateService.content = 'views/terms.html';
        TemplateService.title = "Terms";
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
        $scope.menutitle = NavigationService.makeactive("Contact Us");
        TemplateService.header = 'views/headertext.html';
        $scope.title = "Contact Us";
        TemplateService.content = 'views/Contactus.html';
        TemplateService.title = "Contact Us";
        $scope.navigation = NavigationService.getnav();

    }
);

phonecatControllers.controller('login',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("ogin");
        TemplateService.header = 'views/headertext.html';
        $scope.title = "login";
        TemplateService.content = 'views/login.html';
        TemplateService.title = "Login";
        $scope.navigation = NavigationService.getnav();

    }
);


phonecatControllers.controller('register',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("register");
        TemplateService.header = 'views/headertext.html';
        $scope.title = "register";
        TemplateService.content = 'views/register.html';
        TemplateService.title = "Register";
        $scope.navigation = NavigationService.getnav();

    }
);

phonecatControllers.controller('thankyou',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Thank You");
        TemplateService.header = 'views/headertext.html';
        $scope.title = "thank you";
        TemplateService.content = 'views/thankyou.html';
        TemplateService.title = "Thank you";
        $scope.navigation = NavigationService.getnav();

    }
);

phonecatControllers.controller('Teampage',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;

        $scope.menutitle = NavigationService.makeactive("Team Page");
        TemplateService.header = 'views/headertext.html';
        $scope.title = "Our Team";
        TemplateService.content = 'views/teampage.html';
        TemplateService.title = "Team Page";
        $scope.navigation = NavigationService.getnav();

    }
);
phonecatControllers.controller('headerctrl',
    function($scope, TemplateService) {
        $scope.template = TemplateService;
    }
);