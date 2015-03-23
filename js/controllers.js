var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'MyApp', 'ngRoute']);

phonecatControllers.controller('home',
    function($scope, TemplateService, NavigationService, $location) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Home");
        $scope.title = "Home";
        TemplateService.content = 'views/home.html';
        TemplateService.header = 'views/header.html';
        $scope.navigation = NavigationService.getnav();

        //  AUTHENTICATE
        var authsuccess = function (data, status){
            console.log("auth auth auth");
            console.log(data);
            if(data == "false"){
                $scope.register = "Register";
                $scope.login = "Login";
            }else{
                $scope.register = "Welcome, "+data.name;
                $scope.login = "Logout";
            }
        }
        NavigationService.authenticate().success(authsuccess);
    
        //  REGISTER CLICK
        $scope.onregister = function(){
            if($scope.register == "Register"){
                $location.url("/register");
            }else{
                
            }
        }
    
        //  LOGIN CLICK
        $scope.onlogin = function(){
            if($scope.login == "Login"){
                $location.url("/login");
                console.log("login");
            }else{
                NavigationService.logout();
            }
        }
        
        $scope.myInterval = 5000;
        $scope.slides = [{
            "image": "images/image1.png",
            "name": "first Slide"
        }, {
            "image": "images/image2.png",
            "name": "second Slide"
        }];

        $scope.slides[0].active = "active";

        var displayproject = function(data, status) {
            console.log(data.queryresult);
            console.log(data.queryresult);
            $scope.displayproject = data.queryresult;
        };
        NavigationService.displayfrmdb(displayproject);

        var displaytestmonial1 = function(data, status) {
            
            console.log("testimonial");
            console.log(data);
            $scope.testimonials = data.queryresult;
            $scope.testimonial1 = data.queryresult[0];
            $scope.testimonial2 = data.queryresult[1];
        };
        NavigationService.displaytestmonial(displaytestmonial1);

        //  GET ALL CATEGORY
        var allcategoriessuccess = function (data, status) {
            console.log("categories");
            console.log(data);
            $scope.categories = data.queryresult;
        }
        NavigationService.getallcategory().success(allcategoriessuccess);
    
        //  VIEW ALL PROJECT
    
        $scope.gotoexplore = function (){
            $location.url("/explore/0");
        }
        
        //  TO EXPLORE PAGE
        $scope.toexplore = function(cat) {
            $location.url("/explore/"+ cat.id);
        }
        
    
        //  PARTITION DIV

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

    });

phonecatControllers.controller('works',
    function($scope, TemplateService, NavigationService, $routeParams) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("How it works");
        $scope.title = "How it works";
        $scope.backgroundimg = "How-it-works.jpg";
        TemplateService.content = 'views/works.html';
        TemplateService.header = 'views/headertext.html';
        TemplateService.title = "How It Works";
        $scope.navigation = NavigationService.getnav();

        var staticsuccess = function(data, stauts){
            $scope.content = data[0];
        }
        NavigationService.getsinglestaticpage($routeParams.id).success(staticsuccess);
    }
);

phonecatControllers.controller('fellowship',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("The fellowship");
        TemplateService.header = 'views/headertext.html';
        $scope.title = "The fellowship";
        $scope.backgroundimg = "Fellowship.jpg";
        TemplateService.content = 'views/fellowship.html';
        TemplateService.title = "The fellowship";
        $scope.navigation = NavigationService.getnav();
    }
);
phonecatControllers.controller('aboutUs',
    function($scope, TemplateService, NavigationService, $routeParams) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("About us");
        TemplateService.header = 'views/headertext.html';
        $scope.title = "About Us";
        $scope.backgroundimg = "About-us.jpg"
        TemplateService.content = 'views/aboutus.html';
        TemplateService.title = "About Us";
        $scope.navigation = NavigationService.getnav();

//        $scope.aboutus = "active";

        $scope.changeaboutus = function() {
            NavigationService.getsinglestaticpage($routeParams.id).success(staticsuccess);
            $scope.title = "About Us";
            $scope.aboutus = "active";
            $scope.team = "";
            $scope.faq = "";

        }
        $scope.changeteam = function() {
            NavigationService.getsinglestaticpage($routeParams.id).success(staticsuccess);
            $scope.title = "Our team";
            $scope.aboutus = "";
            $scope.team = "active";
            $scope.faq = "";

        }
        $scope.changefaq = function() {
            NavigationService.getsinglestaticpage($routeParams.id).success(staticsuccess);
            $scope.title = "FAQ";
            $scope.aboutus = "";
            $scope.team = "";
            $scope.faq = "active";

        }
        
        //  DECLARATION
        console.log($routeParams.id);
        $scope.content = [];
        
        //  GET ABOUT US
        var staticsuccess = function(data, status) {
            console.log(data);
            $scope.content = data[0];
        }
        switch($routeParams.id){
                case "1" : {
                    NavigationService.getsinglestaticpage($routeParams.id).success(staticsuccess);
                    $scope.aboutus = "active";
                    break;
                }
                case "2" : {
                    NavigationService.getsinglestaticpage($routeParams.id).success(staticsuccess);
                    $scope.faq = "active";
                    break;
                }
                case "3" : {
                    NavigationService.getsinglestaticpage($routeParams.id).success(staticsuccess);
                    $scope.team = "active";
                    break;
                }
        }
    
        //  GET ONE PAGE
//            NavigationService.getsinglestaticpage()

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
    function($scope, TemplateService, NavigationService, $routeParams, $location) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Explore projects");
        $scope.title = "Explore projects";
        TemplateService.content = 'views/explore.html';
        TemplateService.header = 'views/headerblack.html';
        TemplateService.title = "Explore The Project ";
        $scope.navigation = NavigationService.getnav();
    
        //  DECLARATION
        $scope.projects = [];
    
        //  GET ALL PROJECT
        console.log($routeParams.id);
        var projectsuccess = function (data, status){
            console.log(data);
            $scope.projects = data.queryresult;
            $scope.projects = partitionarray($scope.projects,3);
            console.log($scope.projects);
        }
        NavigationService.getallproject($routeParams.id).success(projectsuccess);
    
        //  GET ALL CATEGORY
        var allcategoriessuccess = function (data, status) {
            console.log("categories");
            console.log(data);
            $scope.categories = data.queryresult;
            for(var i=0;i<$scope.categories.length;i++ )
            {
                $scope.categories[0].active = "";
            }
            
        }
        NavigationService.getallcategory().success(allcategoriessuccess);
    
        //  TO CATEGORY FILTER
        $scope.tocategory = function(cat){
            cat.active = "active";
            NavigationService.getallproject(cat.id).success(projectsuccess);
        }
    
    }
);

phonecatControllers.controller('campaign',
    function($scope, TemplateService, NavigationService, $window, $location, $anchorScroll, anchorSmoothScroll, $routeParams) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Campaign");
        $scope.title = "Campaign";
        TemplateService.content = 'views/campaign.html';
        TemplateService.header = 'views/HeaderCampaign.html';
        TemplateService.title = "Campaign";
        $scope.navigation = NavigationService.getnav();
    
        //   TO CATEGORY PAGE
        $scope.tocategory = function () {
            $location.url("/explore/"+$scope.project.category);
        }

        console.log($routeParams.id);

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
        var displaystaticpage = function(data, status) {
            console.log("welcome here");
            console.log(data);
            $scope.datapoint = data.datapoint;
            $scope.datapoint = partitionarray($scope.datapoint,3);
            $scope.project = data.project;
            $scope.bgimage = {
                "background": 'url(http://wohlig.co.in/powerforone/uploads/' + $scope.project.image + ') no-repeat',
                "-webkit-background-size": 'cover',
                "-moz-background-size": 'cover',
                "-o-background-size": 'cover',
                "background-size": 'cover',
                "background-position": 'top',
                "min-height": '400px',
                "width": '100%'
            };

            $scope.projectimages = data.projectimages;
            $scope.mainimage = $scope.projectimages[0].image;
            $scope.tomainimage = function (bigimg){
                $scope.mainimage = bigimg.image;
            }
            $scope.similarcauses = data.similarcauses;

        };
        NavigationService.getsingleproject($routeParams.id, displaystaticpage);

    }
);

phonecatControllers.controller('myprofile',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("My Profile");
        $scope.title = "My Profile";
        $scope.backgroundimg = "Profile.jpg";
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
        $scope.backgroundimg = "T&C.jpg";
        TemplateService.content = 'views/terms.html';
        TemplateService.title = "Terms";
        $scope.navigation = NavigationService.getnav();

    }
);
phonecatControllers.controller('workwithus',
    function($scope, TemplateService, NavigationService, $routeParams) {
        $scope.template = TemplateService;
        TemplateService.header = 'views/headertext.html';
        $scope.title = "Work With Us";
        $scope.backgroundimg = "Work-with-us.jpg";
        TemplateService.content = 'views/workwithus.html';
        $scope.navigation = NavigationService.getnav();

        var staticsuccess = function(data, status){
            $scope.content = data[0];
        }
        NavigationService.getsinglestaticpage($routeParams.id).success(staticsuccess);
    }
);

phonecatControllers.controller('Contactus',
    function($scope, TemplateService, NavigationService, $routeParams) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Contact Us");
        TemplateService.header = 'views/headertext.html';
        $scope.title = "Contact Us";
        $scope.backgroundimg = "Contact.jpg";
        TemplateService.content = 'views/Contactus.html';
        TemplateService.title = "Contact Us";
        $scope.navigation = NavigationService.getnav();
    
        
        var staticsuccess = function(data, status){
            $scope.content = data[0];
        }
        NavigationService.getsinglestaticpage($routeParams.id).success(staticsuccess);
    }
);

phonecatControllers.controller('login',
    function($scope, TemplateService, NavigationService, $location) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("login");
        TemplateService.header = 'views/headerblack.html';
        $scope.title = "login";
        TemplateService.content = 'views/login.html';
        TemplateService.title = "Login";
        $scope.navigation = NavigationService.getnav();

        //  DECLARATION
        $scope.user = [];
    
        //  ON LOGIN
        var loginsuccess = function (data, status) {
            console.log(data);
            if(data == "false")
            {
                alert("Invalid Id Or Password");
            }else{
                $location.url("/home");
            }
        }
        $scope.userlogin = function (user) {
            console.log(user);
            NavigationService.login(user).success(loginsuccess);
        }
    }
);


phonecatControllers.controller('register',
    function($scope, TemplateService, NavigationService, $location) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("register");
        TemplateService.header = 'views/headerblack.html';
        $scope.title = "register";
        TemplateService.content = 'views/register.html';
        TemplateService.title = "Register";
        $scope.navigation = NavigationService.getnav();

        //  DECLARATION
        $scope.user = [];
        
        //  ON REGISTER
        var registersuccess = function (data, status) {
            console.log(data);
            if(data == "false")
            {
                alert("Enable To Create User");
            }else{
                $location.url("/login");
            }
        }
        $scope.createuser = function (user) {
            NavigationService.register(user).success(registersuccess);
        }
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
        $scope.backgroundimg = "Thank-you.jpg";
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
        $scope.backgroundimg = "Team-&-Advisors.jpg";
        TemplateService.content = 'views/teampage.html';
        TemplateService.title = "Team Page";
        $scope.navigation = NavigationService.getnav();

    }
);
phonecatControllers.controller('headerctrl',
    function($scope, TemplateService) {
        $scope.template = TemplateService;
    
        $scope.demo = "fsdfasfa";
    
    }
);

phonecatControllers.controller('footer',
    function($scope, TemplateService, $location, NavigationService) {
        $scope.template = TemplateService;
    
        //  DECLARATION
    
    
        //  ALL FOOTER
        var pagesuccess = function(data, status){
            console.log(data);
            $scope.pages = data;
        }
        NavigationService.getstaticpages().success(pagesuccess);
    
        //  TO OTHER PAGES
        $scope.topages = function(page){
            switch(page.id){
                    case "1" :
                    case "2" :
                    case "3" : {
                        $location.url("/aboutUs/"+page.id);
                        break;
                    }
                    case "4" : {
                        $location.url("/works/"+page.id);
                    }
                    case "5" : {
                        $location.url("/workwithus/"+page.id);
                    }
                    case "6" : {
                        $location.url("/contactus/"+page.id);
                    }
            }
        }
    }
);