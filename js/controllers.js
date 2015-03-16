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
        $scope.backgroundimg="How-it-works.jpg";
        TemplateService.content = 'views/works.html';
        TemplateService.header = 'views/headertext.html';
        TemplateService.title = "How It Works";
        $scope.navigation = NavigationService.getnav();
    }
);

phonecatControllers.controller('fellowship',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("The fellowship");
        TemplateService.header = 'views/headertext.html';
        $scope.title = "The fellowship";
    $scope.backgroundimg="Fellowship.jpg";
        TemplateService.content = 'views/fellowship.html';
        TemplateService.title = "The fellowship";
        $scope.navigation = NavigationService.getnav();
    }
);
phonecatControllers.controller('aboutUs',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("About us");
        TemplateService.header = 'views/headertext.html';
        $scope.title = "About Us";
        $scope.backgroundimg="About-us.jpg"
        TemplateService.content = 'views/aboutus.html';
        TemplateService.title = "About Us";
        $scope.navigation = NavigationService.getnav();
    
        $scope.aboutus="active";
    
        $scope.changeaboutus = function (){
            $scope.title="About Us";
            $scope.aboutus="active";
            $scope.team="";
            $scope.faq="";
            
        }
        $scope.changeteam = function (){
            $scope.title="Our team";
            $scope.aboutus="";
            $scope.team="active";
            $scope.faq="";
            
        }
        $scope.changefaq = function (){
            $scope.title="FAQ";
            $scope.aboutus="";
            $scope.team="";
            $scope.faq="active";
            
        }

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
        $scope.backgroundimg="Profile.jpg";
        TemplateService.content = 'views/myprofile.html';
        TemplateService.header = 'views/headertext.html';
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

phonecatControllers.controller('termsandcondition',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Terms & Condition");
        TemplateService.header = 'views/headertext.html';
        $scope.title = "Terms & Condition";
        $scope.backgroundimg="T&C.jpg";
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
        $scope.backgroundimg="Work-with-us.jpg";
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
        $scope.backgroundimg="Contact.jpg";
        TemplateService.content = 'views/Contactus.html';
        TemplateService.title = "Contact Us";
        $scope.navigation = NavigationService.getnav();

    }
);

phonecatControllers.controller('login',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("login");
        TemplateService.header = 'views/headerblack.html';
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
        TemplateService.header = 'views/headerblack.html';
        $scope.title = "register";
        TemplateService.content = 'views/register.html';
        TemplateService.title = "Register";
        $scope.navigation = NavigationService.getnav();

    }
);

phonecatControllers.controller('policy',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("policy");
        TemplateService.header = 'views/headerblack.html';
        $scope.title = "register";
        TemplateService.content = 'views/policy.html';
        TemplateService.title = "Privacy Policy";
        $scope.navigation = NavigationService.getnav();

    }
);

phonecatControllers.controller('checkout',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("checkout");
        TemplateService.header = 'views/headertext.html';
        $scope.backgroundimg = 'Checkout.jpg';
        $scope.title = "checkout";
        TemplateService.content = 'views/checkout.html';
        TemplateService.title = "Checkout";
        $scope.navigation = NavigationService.getnav();

    }
);

phonecatControllers.controller('faq',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("faq");
        TemplateService.header = 'views/headerblack.html';
        $scope.title = "faq";
        TemplateService.content = 'views/faq.html';
        TemplateService.title = "FAQ";
        $scope.navigation = NavigationService.getnav();

    }
);

phonecatControllers.controller('thankyou',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Thank You");
        TemplateService.header = 'views/headertext.html';
        $scope.title = "thank you";
        $scope.backgroundimg="Thank-you.jpg";
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
        $scope.backgroundimg="Team-&-Advisors.jpg";
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