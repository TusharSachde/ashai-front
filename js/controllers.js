var adminurl = "http://wohlig.co.in/powerforone/index.php/";
var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'MyApp', 'ngRoute', 'ngSanitize']);

phonecatControllers.controller('home',
    function ($scope, TemplateService, NavigationService, $location) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Home");
        $scope.title = "Home";
        TemplateService.content = 'views/home.html';
        TemplateService.header = 'views/header.html';
        $scope.navigation = NavigationService.getnav();

        //  DECLARATION
        //        $scope.isLoading = true;
        //  AUTHENTICATE
        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data == "false") {
                $scope.register = "Register";
                $scope.login = "Login";
            } else {
                $scope.register = data.name;
                $scope.login = "Logout";
            }
        }
        NavigationService.authenticate().success(authsuccess);

        //  REGISTER CLICK
        $scope.onregister = function () {
            if ($scope.register == "Register") {
                $location.url("/register");
            } else {
                $location.url("/myprofile");
            }
        }

        //  LOGIN CLICK
        $scope.onlogin = function () {
            if ($scope.login == "Login") {
                $location.url("/login");
                //                console.log("login");
            } else {
                NavigationService.logout();
                $scope.register = "Register";
                $scope.login = "Login";
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

        var displayproject = function (data, status) {
            //            console.log(data.queryresult);
            console.log(data.queryresult);
            $scope.displayproject = data.queryresult;
        };
        NavigationService.displayfrmdb(displayproject);

        var displaytestmonial1 = function (data, status) {

            //            console.log("testimonial");
            //            console.log(data);
            $scope.testimonials = data.queryresult;
            $scope.testimonial1 = data.queryresult[0];
            $scope.testimonial2 = data.queryresult[1];
        };
        NavigationService.displaytestmonial(displaytestmonial1);

        //  GET ALL CATEGORY
        var allcategoriessuccess = function (data, status) {
            //            console.log("categories");
            //            console.log(data);
            $scope.categories = data.queryresult;
        }
        NavigationService.getallcategory().success(allcategoriessuccess);

        //  VIEW ALL PROJECT

        $scope.gotoexplore = function () {
            $location.url("/explore/0");
        }

        //  TO EXPLORE PAGE
        $scope.toexplore = function (cat) {
            $location.url("/explore/" + cat.id);
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

        //  INTERVAL

        $scope.myInterval = 5000;

    });

phonecatControllers.controller('works',
    function ($scope, TemplateService, NavigationService, $routeParams, $location, $filter) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("How it works");
        $scope.title = "How it works";
        $scope.backgroundimg = "How-it-works.jpg";
        TemplateService.content = 'views/works.html';
        TemplateService.header = 'views/headertext.html';
        TemplateService.title = "How It Works";
        $scope.navigation = NavigationService.getnav();


        //  AUTHENTICATE
        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data == "false") {
                $scope.register = "Register";
                $scope.login = "Login";
            } else {
                $scope.register = data.name;
                $scope.login = "Logout";
            }
        }
        NavigationService.authenticate().success(authsuccess);

        //  REGISTER CLICK
        $scope.onregister = function () {
            if ($scope.register == "Register") {
                $location.url("/register");
            } else {
                $location.url("/myprofile");
            }
        }

        //  LOGIN CLICK
        $scope.onlogin = function () {
            if ($scope.login == "Login") {
                $location.url("/login");
                //                console.log("login");
            } else {
                NavigationService.logout();
                $scope.register = "Register";
                $scope.login = "Login";
            }
        }


        //  GET WORKS PAGE
        var staticsuccess = function (data, stauts) {
            $scope.content = data[0];
            $scope.backgroundimg = "url(" + $filter('bannerimagepath')(data[0].bannerimage) + ")";
            console.log($scope.backgroundimg);
            //            $scope.backgroundimg = data[0].bannerimage;
        }
        NavigationService.getsinglestaticpage(4).success(staticsuccess);
    }
);
phonecatControllers.controller('fellowship',
    function ($scope, TemplateService, NavigationService, $location, $filter) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("The fellowship");
        TemplateService.header = 'views/headertext.html';
        $scope.title = "&nbsp;";
        $scope.backgroundimg = "learn_more.png";
        TemplateService.content = 'views/fellowship.html';
        TemplateService.title = "The fellowship";
        $scope.form2 = {};
        $scope.message = false;
        $scope.navigation = NavigationService.getnav();
        var submitpfo = function (data, status) {
            console.log(data);
            if (data != "0") {
                $scope.message = true;
                $scope.textmessage = "Saved successfully";
            } else {
                $scope.message = false;
                $scope.textmessage = "Error In Saving";
            }
        }

        $scope.allvalidation = [];
        $scope.submitpfo = function (form2) {
            //  VALIDATION
            $scope.allvalidation = [{
                field: $scope.form2.name,
                validation: ""
            }, {
                field: $scope.form2.contact,
                validation: ""
            }, {
                field: $scope.form2.email,
                validation: ""
            }, {
                field: $scope.form2.country,
                validation: ""
            }, {
                field: $scope.form2.city,
                validation: ""
            }, {
                field: $scope.form2.message,
                validation: ""
            }];
            var check = formvalidation($scope.allvalidation);

            if (check) {
                NavigationService.submitpfo(form2).success(submitpfo);
            };
        };


        //  AUTHENTICATE
        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data == "false") {
                $scope.register = "Register";
                $scope.login = "Login";
            } else {
                $scope.register = data.name;
                $scope.login = "Logout";
            }
        }
        NavigationService.authenticate().success(authsuccess);

        //  REGISTER CLICK
        $scope.onregister = function () {
            if ($scope.register == "Register") {
                $location.url("/register");
            } else {
                $location.url("/myprofile");
            }
        }

        //  LOGIN CLICK
        $scope.onlogin = function () {
                if ($scope.login == "Login") {
                    $location.url("/login");
                    //                console.log("login");
                } else {
                    NavigationService.logout();
                    $scope.register = "Register";
                    $scope.login = "Login";
                }
            }
                    var staticsuccess = function (data, status) {
                        console.log(data);
                        $scope.content = data[0];
                        $scope.title = data[0].name;
                        //            $scope.backgroundimg = data[0].bannerimage;
                        $scope.backgroundimg = "url(" + $filter('bannerimagepath')(data[0].bannerimage) + ")";
                        console.log($scope.backgroundimg);
                    }
                    NavigationService.getsinglestaticpage(11).success(staticsuccess);
    }

);
phonecatControllers.controller('aboutUs',
    function ($scope, TemplateService, NavigationService, $routeParams, $location, $filter) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("About us");
        TemplateService.header = 'views/headertext.html';
        $scope.backgroundimg = "About-us.jpg"
        TemplateService.content = 'views/aboutus.html';
        TemplateService.title = "About Us";
        $scope.navigation = NavigationService.getnav();


        //  AUTHENTICATE
        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data == "false") {
                $scope.register = "Register";
                $scope.login = "Login";
            } else {
                $scope.register = data.name;
                $scope.login = "Logout";
            }
        }
        NavigationService.authenticate().success(authsuccess);

        //  REGISTER CLICK
        $scope.onregister = function () {
            if ($scope.register == "Register") {
                $location.url("/register");
            } else {
                $location.url("/myprofile");
            }
        }

        //  LOGIN CLICK
        $scope.onlogin = function () {
            if ($scope.login == "Login") {
                $location.url("/login");
                //                console.log("login");
            } else {
                NavigationService.logout();
                $scope.register = "Register";
                $scope.login = "Login";
            }
        }

        //        $scope.aboutus = "active";

        $scope.changeaboutus = function () {
            NavigationService.getsinglestaticpage(1).success(staticsuccess);
            $scope.aboutus = "active";
            $scope.team = "";
            $scope.faq = "";

        }
        $scope.changeteam = function () {
            NavigationService.getsinglestaticpage(3).success(staticsuccess);
            $scope.aboutus = "";
            $scope.team = "active";
            $scope.faq = "";

        }
        $scope.changefaq = function () {
            NavigationService.getsinglestaticpage(2).success(staticsuccess);
            $scope.aboutus = "";
            $scope.team = "";
            $scope.faq = "active";

        }

        //  DECLARATION
        //        console.log($routeParams.id);
        $scope.content = [];

        //  GET ABOUT US
        var staticsuccess = function (data, status) {
            console.log(data);
            $scope.content = data[0];
            $scope.title = data[0].name;
            //            $scope.backgroundimg = data[0].bannerimage;
            $scope.backgroundimg = "url(" + $filter('bannerimagepath')(data[0].bannerimage) + ")";
            console.log($scope.backgroundimg);
        }
        switch ($routeParams.id) {
        case "1":
            {
                NavigationService.getsinglestaticpage($routeParams.id).success(staticsuccess);
                $scope.aboutus = "active";
                break;
            }
        case "2":
            {
                NavigationService.getsinglestaticpage($routeParams.id).success(staticsuccess);
                $scope.faq = "active";
                break;
            }
        case "3":
            {
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
    function ($scope, TemplateService, NavigationService, $location, $filter, $sce) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Blog");

        TemplateService.header = 'views/headertext.html';
        $scope.title = "blog";
        TemplateService.content = 'views/blog.html';
        TemplateService.title = "Blog";
        $scope.navigation = NavigationService.getnav();

        //  DECLARATIONS
        $scope.blogs = [];

        //  AUTHENTICATE
        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data == "false") {
                $scope.register = "Register";
                $scope.login = "Login";
            } else {
                $scope.register = data.name;
                $scope.login = "Logout";
            }
        }
        NavigationService.authenticate().success(authsuccess);

        //  REGISTER CLICK
        $scope.onregister = function () {
            if ($scope.register == "Register") {
                $location.url("/register");
            } else {
                $location.url("/myprofile");
            }
        }

        //  LOGIN CLICK
        $scope.onlogin = function () {
            if ($scope.login == "Login") {
                $location.url("/login");
                //                console.log("login");
            } else {
                NavigationService.logout();
                $scope.register = "Register";
                $scope.login = "Login";
            }
        }

        //  GET ALL BLOGS
        var blogsuccess = function (data, status) {
            //            console.log(data);
            $scope.blogs = data.queryresult;
        }
        NavigationService.getblog().success(blogsuccess);


    }
);


phonecatControllers.controller('forgot',
    function ($scope, TemplateService, NavigationService, $location, $filter, $sce) {
        $scope.template = TemplateService;
        //        $scope.menutitle = NavigationService.makeactive("Forgot");

        TemplateService.header = 'views/headerblack.html';

        TemplateService.content = 'views/forgot.html';
        TemplateService.title = "Blog";
        $scope.navigation = NavigationService.getnav();

        //  DECLARATIONS
        $scope.blogs = [];

        //  AUTHENTICATE
        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data == "false") {
                $scope.register = "Register";
                $scope.login = "Login";
            } else {
                $scope.register = data.name;
                $scope.login = "Logout";
            }
        }
        NavigationService.authenticate().success(authsuccess);

        //  REGISTER CLICK
        $scope.onregister = function () {
            if ($scope.register == "Register") {
                $location.url("/register");
            } else {
                $location.url("/myprofile");
            }
        }

        //  LOGIN CLICK
        $scope.onlogin = function () {
            if ($scope.login == "Login") {
                $location.url("/login");
                //                console.log("login");
            } else {
                NavigationService.logout();
                $scope.register = "Register";
                $scope.login = "Login";
            }
        }

        //  GET ALL BLOGS
        var blogsuccess = function (data, status) {
            //            console.log(data);
            $scope.blogs = data.queryresult;
        }
        NavigationService.getblog().success(blogsuccess);


    }
);

phonecatControllers.controller('bloginner',
    function ($scope, TemplateService, NavigationService, $location, $routeParams) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Blog");

        TemplateService.header = 'views/headertext.html';
        $scope.title = "blog";
        TemplateService.content = 'views/bloginner.html';
        TemplateService.title = "Blog Inner Page";
        $scope.navigation = NavigationService.getnav();


        //  AUTHENTICATE
        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data == "false") {
                $scope.register = "Register";
                $scope.login = "Login";
            } else {
                $scope.register = data.name;
                $scope.login = "Logout";
            }
        }
        NavigationService.authenticate().success(authsuccess);

        //  REGISTER CLICK
        $scope.onregister = function () {
            if ($scope.register == "Register") {
                $location.url("/register");
            } else {
                $location.url("/myprofile");
            }
        }

        //  LOGIN CLICK
        $scope.onlogin = function () {
            if ($scope.login == "Login") {
                $location.url("/login");
                //                console.log("login");
            } else {
                NavigationService.logout();
                $scope.register = "Register";
                $scope.login = "Login";
            }
        }

        //  GET SINGLE BLOG
        var singleblog = function (data, status) {
            //            console.log(data);
            $scope.blog = data[0];
        }
        NavigationService.getsingleblog($routeParams.id).success(singleblog);

    }
);


phonecatControllers.controller('Explore',
    function ($scope, TemplateService, NavigationService, $routeParams, $location) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Explore projects");
        $scope.title = "Explore projects";
        TemplateService.content = 'views/explore.html';
        TemplateService.header = 'views/headerblack.html';
        TemplateService.title = "Explore The Project ";
        $scope.navigation = NavigationService.getnav();


        //  AUTHENTICATE
        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data == "false") {
                $scope.register = "Register";
                $scope.login = "Login";
            } else {
                $scope.register = data.name;
                $scope.login = "Logout";
            }
        }
        NavigationService.authenticate().success(authsuccess);

        //  REGISTER CLICK
        $scope.onregister = function () {
            if ($scope.register == "Register") {
                $location.url("/register");
            } else {
                $location.url("/myprofile");
            }
        }

        //  LOGIN CLICK
        $scope.onlogin = function () {
            if ($scope.login == "Login") {
                $location.url("/login");
                //                console.log("login");
            } else {
                NavigationService.logout();
                $scope.register = "Register";
                $scope.login = "Login";
            }
        }

        //  DECLARATION
        $scope.projects = [];
        $scope.catg = [];
        $scope.catid = [];

        //  GET ALL PROJECT
        //        console.log($routeParams.id);
        var projectsuccess = function (data, status) {
            console.log(data);
            $scope.projects = data.queryresult;
            $scope.projects = partitionarray($scope.projects, 3);
            //            console.log($scope.projects);
        }
        NavigationService.getprojectbycategoryarray($routeParams.id).success(projectsuccess);

        //  GET ALL CATEGORY
        var allcategoriessuccess = function (data, status) {
            //            console.log("categories");
            //            console.log(data);
            $scope.categories = data.queryresult;
            for (var i = 0; i < $scope.categories.length; i++) {
                if ($scope.categories[i].id == $routeParams.id) {
                    $scope.categories[i].active = "active";
                    $scope.catg.push($scope.categories[i]);
                } else {
                    $scope.categories[i].active = "";
                }
            }

        }
        NavigationService.getallcategory().success(allcategoriessuccess);

        //  TO CATEGORY FILTER
        $scope.tocategory = function (cat) {

            if ($scope.catg.length == 0) {
                $scope.catg.push(cat);
                //                console.log("in push");
                //                console.log($scope.catg);
            } else {
                for (var i = 0; i < $scope.catg.length; i++) {
                    if ($scope.catg[i].id == cat.id) {
                        $scope.catg.splice(i, 1);
                        $scope.in = 0;
                    } else {
                        $scope.in = 1;

                    }
                }

                if ($scope.in == 1) {
                    $scope.catg.push(cat);
                }
                //                console.log("in else part");
                //                console.log($scope.catg);
            }
            if ($scope.catg == '') {
                $scope.catid = 0;
            } else {
                $scope.catid = $scope.catg[0].id;
                for (var i = 1; i < $scope.catg.length; i++) {
                    $scope.catid += "," + $scope.catg[i].id;
                }
            }

            if (cat.active == "active") {
                cat.active = "";
            } else {
                cat.active = "active";
            }
            NavigationService.getprojectbycategoryarray($scope.catid).success(projectsuccess);
        }

        //  GET ALL CATEGORY ON ALL
        $scope.getallproject = function () {
            for (var i = 0; i < $scope.categories.length; i++) {
                $scope.categories[i].active = "";
            }
            NavigationService.getprojectbycategoryarray(0).success(projectsuccess);
        }

    }
);

phonecatControllers.controller('campaign',
    function ($scope, TemplateService, NavigationService, $window, $location, $anchorScroll, anchorSmoothScroll, $routeParams) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Campaign");
        $scope.title = "Campaign";
        TemplateService.content = 'views/campaign.html';
        TemplateService.header = 'views/HeaderCampaign.html';
        TemplateService.title = "Campaign";
        $scope.navigation = NavigationService.getnav();

        //  DECLARATION
        $scope.project = [];
        $scope.facebookdiv = false;
        $scope.twitterdiv = false;
        $scope.isLoading = true;
        $scope.donation = NavigationService.getdonation();
        $scope.amount = $scope.donation[0].val;
        $scope.pre = $scope.donation[0].val;
        $.jStorage.set("amount", $scope.amount);
        $scope.donationdiv = "donation";
        $scope.showvideo = false;
        $scope.playvideo = "";
        $scope.project.facebookaddon = "";
        $scope.project.twitteraddon = "";
        $scope.anonymous = false;
        $scope.changevideo = function (video) {
            $scope.playvideo = video;
            $scope.showvideo = true;
        }
        $scope.changeperiod = function (donate) {
            $scope.amount = donate;
            $.jStorage.set("amount", donate);
        }

        $scope.donnercheck = function (checkdonner) {
            console.log(checkdonner);
            $scope.donationdiv = "donation-selected";
            $scope.disabledgive = false;
        }

        //  AUTHENTICATE
        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data == "false") {
                $scope.register = "Register";
                $scope.login = "Login";
            } else {
                $scope.register = data.name;
                $scope.login = "Logout";
            }
        }
        NavigationService.authenticate().success(authsuccess);

        //  REGISTER CLICK
        $scope.onregister = function () {
            if ($scope.register == "Register") {
                $location.url("/register");
            } else {
                $location.url("/myprofile");
            }
        }

        //  LOGIN CLICK
        $scope.onlogin = function () {
            if ($scope.login == "Login") {
                $location.url("/login");
                //                console.log("login");
            } else {
                NavigationService.logout();
                $scope.register = "Register";
                $scope.login = "Login";
            }
        }

        //   TO CATEGORY PAGE
        $scope.tocategory = function () {
            $location.url("/explore/" + $scope.project.category);
        }

        //        console.log($routeParams.id);

        angular.element($window).bind("scroll", function () {
            $scope.scrolled = this.pageYOffset;
            $scope.greatHeight = angular.element('.sliderheadercampaign').height() - angular.element('.headerzindex').height();
            $scope.$apply();
        });
        $scope.myinterval = 5000;
        $scope.gotoElement = function (id) {
            $location.hash(id);
            //            $anchorScroll();
            anchorSmoothScroll.scrollTo(id);
        }
        var displaystaticpage = function (data, status) {
            console.log("one campaign");
            console.log(data);
            $scope.percent = data.percent;
            $scope.totalprojectamount = data.totalprojectamount;
            $scope.datapoint = data.datapoint;
            $scope.datapoint = partitionarray($scope.datapoint, 3);
            $scope.project = data.project;
            if ($scope.project.indiandoner == "1") {
                $scope.donationdiv = "donation-selected";
                $scope.disabledgive = false;
            } else {
                $scope.donationdiv = "blur";
                $scope.disabledgive = true;
            }
            $scope.bgimage = {
                "background": 'url(http://wohlig.co.in/powerforone/uploads/' + $scope.project.cardimage + ') no-repeat',
                "-webkit-background-size": 'cover',
                "-moz-background-size": 'cover',
                "-o-background-size": 'cover',
                "background-size": 'cover',
                "background-position": 'top',
                "min-height": '400px',
                "width": '100%'
            };

            $scope.projectimages = data.projectimages;
            if ($scope.projectimages != '') {
                $scope.mainimage = $scope.projectimages[0].image;
            }
            $scope.tomainimage = function (bigimg) {
                $scope.showvideo = false;
                $scope.mainimage = bigimg.image;
            }
            $scope.tovideo = function (video) {
                console.log(video);
            }
            $scope.similarcauses = data.similarcauses;
            $scope.isLoading = false;

        };
        NavigationService.getsingleproject($routeParams.id, displaystaticpage);

        //  TESTIMONIALS
        var displaytestmonial1 = function (data, status) {

            //            console.log("testimonial");
            //            console.log(data);
            $scope.testimonials = data.queryresult;
            $scope.testimonial1 = data.queryresult[0];
            $scope.testimonial2 = data.queryresult[1];
        };
        NavigationService.displaytestmonial(displaytestmonial1);

        //  POST ON FACEBOOK
        $scope.hidefacebook = function () {
            $scope.facebookdiv = false;
        }
        $scope.facebookshow = function () {
            $scope.facebookdiv = true;
            $scope.twitterdiv = false;
        }
        $scope.facebookshare = function (text) {
            window.location.href = admin_url + "hauth/postfb?message=" + $scope.project.facebooktext + " " + $scope.project.facebookaddon + "&project=" + $scope.project.id + "&returnurl=" + window.location.origin + window.location.pathname + "#/thankyou";
        }

        //  POST ON Twiter
        $scope.hidetwitter = function () {
            $scope.twitterdiv = false;
        }
        $scope.twittershow = function () {
            $scope.facebookdiv = false;
            $scope.twitterdiv = true;
        }
        $scope.twittershare = function () {
            window.location.href = admin_url + "hauth/posttweet?message=" + $scope.project.twittertext + " " + $scope.project.twitteraddon + "&project=" + $scope.project.id + "&returnurl=" + window.location.origin + window.location.pathname + "#/thankyou";
        }

        //  TO CHECKOUT
        $scope.tocheckout = function (id, name) {
            console.log(id);
            NavigationService.setprojectid(id);
            $.jStorage.set("projectname", name);
            $.jStorage.set("anonymous", $scope.anonymous);
            $location.url("/checkout");
        }

    }
    //
);

phonecatControllers.controller('myprofile',
    function ($scope, TemplateService, NavigationService, $location) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("My Profile");
        $scope.title = "My Profile";
        $scope.backgroundimg = "Profile.jpg";
        TemplateService.content = 'views/myprofile.html';
        TemplateService.header = 'views/headertext.html';
        TemplateService.title = "My Profile";
        $scope.navigation = NavigationService.getnav();
        //    $scope.display="About Us";

        $scope.projects = [];
        $scope.myInterval = 5000;
        $scope.user = [];

        //  AUTHENTICATE
        var usersuccess = function (data, status) {
            console.log(data);
            $scope.user = data[0];
        }

        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data == "false") {
                $scope.register = "Register";
                $scope.login = "Login";

            } else {
                $scope.register = data.name;
                $scope.login = "Logout";
                NavigationService.getsingleuser().success(usersuccess);
            }
        }
        NavigationService.authenticate().success(authsuccess);

        //  REGISTER CLICK
        $scope.onregister = function () {
            if ($scope.register == "Register") {
                $location.url("/register");
            } else {
                $location.url("/myprofile");
            }
        }

        //  LOGIN CLICK
        $scope.onlogin = function () {
            if ($scope.login == "Login") {
                $location.url("/login");
                //                console.log("login");
            } else {
                NavigationService.logout();
                $scope.register = "Register";
                $scope.login = "Login";
            }
        }

        var projectsuccess = function (data, status) {
            $scope.projects = data.queryresult;
            //            console.log($scope.projects);
        }
        NavigationService.getprojectbycategoryarray(1).success(projectsuccess);
    }
);

phonecatControllers.controller('rewards',
    function ($scope, $location, TemplateService, NavigationService, $location) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Rewards");
        TemplateService.header = 'views/headerblack.html';
        $scope.title = "Rewards";
        TemplateService.content = 'views/rewards.html';
        TemplateService.title = "Rewards";
        $scope.navigation = NavigationService.getnav();


        //  AUTHENTICATE
        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data == "false") {
                $scope.register = "Register";
                $scope.login = "Login";
            } else {
                $scope.register = data.name;
                $scope.login = "Logout";
            }
        }
        NavigationService.authenticate().success(authsuccess);

        //  REGISTER CLICK
        $scope.onregister = function () {
            if ($scope.register == "Register") {
                $location.url("/register");
            } else {
                $location.url("/myprofile");
            }
        }

        //  LOGIN CLICK
        $scope.onlogin = function () {
            if ($scope.login == "Login") {
                $location.url("/login");
                //                console.log("login");
            } else {
                NavigationService.logout();
                $scope.register = "Register";
                $scope.login = "Login";
            }
        }

    }
);

phonecatControllers.controller('termsandcondition',
    function ($scope, TemplateService, NavigationService, $location, $filter) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Terms & Condition");
        TemplateService.header = 'views/headertext.html';
        $scope.title = "Terms & Condition";
        $scope.backgroundimg = "T&C.jpg";
        TemplateService.content = 'views/terms.html';
        TemplateService.title = "Terms";
        $scope.navigation = NavigationService.getnav();


        //  AUTHENTICATE
        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data == "false") {
                $scope.register = "Register";
                $scope.login = "Login";
            } else {
                $scope.register = data.name;
                $scope.login = "Logout";
            }
        }
        NavigationService.authenticate().success(authsuccess);

        //  REGISTER CLICK
        $scope.onregister = function () {
            if ($scope.register == "Register") {
                $location.url("/register");
            } else {
                $location.url("/myprofile");
            }
        }

        //  LOGIN CLICK
        $scope.onlogin = function () {
            if ($scope.login == "Login") {
                $location.url("/login");
                //                console.log("login");
            } else {
                NavigationService.logout();
                $scope.register = "Register";
                $scope.login = "Login";
            }
        }

        //  GET TERMS AND CONDITION PAGE
        var staticsuccess = function (data, status) {
            $scope.content = data[0];
            //            $scope.backgroundimg = data[0].bannerimage;
            $scope.backgroundimg = "url(" + $filter('bannerimagepath')(data[0].bannerimage) + ")";
            console.log($scope.backgroundimg);

        }
        NavigationService.getsinglestaticpage(7).success(staticsuccess);

    }
);
phonecatControllers.controller('workwithus',
    function ($scope, TemplateService, NavigationService, $routeParams, $filter) {
        $scope.template = TemplateService;
        TemplateService.header = 'views/headertext.html';
        $scope.title = "Work With Us";
        $scope.form1 = {};
        $scope.backgroundimg = "Work-with-us.jpg";
        TemplateService.content = 'views/workwithus.html';
        $scope.message = false;
        $scope.navigation = NavigationService.getnav();
        var submitworkwithus = function (data, status) {
            console.log(data);
            if (data != "0") {
                $scope.message = true;
                $scope.textmessage = "Saved successfully";
            } else {
                $scope.message = false;
                $scope.textmessage = "Error In Saving";
            }
        }

        // NavigationService.submitworkwithus(form1).success(submitworkwithus);


        $scope.allvalidation = [];
        $scope.submitworkwithus = function (form1) {
            //  VALIDATION
            $scope.allvalidation = [{
                field: $scope.form1.name,
                validation: ""
            }, {
                field: $scope.form1.contact,
                validation: ""
            }, {
                field: $scope.form1.email,
                validation: ""
            }, {
                field: $scope.form1.country,
                validation: ""
            }, {
                field: $scope.form1.city,
                validation: ""
            }, {
                field: $scope.form1.message,
                validation: ""
            }];
            var check = formvalidation($scope.allvalidation);

            if (check) {
                NavigationService.submitworkwithus(form1).success(submitworkwithus);
            };
        };

        //  AUTHENTICATE
        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data == "false") {
                $scope.register = "Register";
                $scope.login = "Login";
            } else {
                $scope.register = data.name;
                $scope.login = "Logout";
            }
        }
        NavigationService.authenticate().success(authsuccess);

        //  REGISTER CLICK
        $scope.onregister = function () {
            if ($scope.register == "Register") {
                $location.url("/register");
            } else {
                $location.url("/myprofile");
            }
        }

        //  LOGIN CLICK
        $scope.onlogin = function () {
            if ($scope.login == "Login") {
                $location.url("/login");
                //                console.log("login");
            } else {
                NavigationService.logout();
                $scope.register = "Register";
                $scope.login = "Login";
            }
        }

        var staticsuccess = function (data, status) {
            $scope.content = data[0];
            //            $scope.backgroundimg = data[0].bannerimage;
            $scope.backgroundimg = "url(" + $filter('bannerimagepath')(data[0].bannerimage) + ")";
            console.log($scope.backgroundimg);
        }
        NavigationService.getsinglestaticpage(5).success(staticsuccess);
    }
);

phonecatControllers.controller('Contactus',
    function ($scope, TemplateService, NavigationService, $routeParams, $filter) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Contact Us");
        TemplateService.header = 'views/headertext.html';
        $scope.title = "Contact Us";
        $scope.backgroundimg = "Contact.jpg";
        TemplateService.content = 'views/Contactus.html';
        TemplateService.title = "Contact Us";
        $scope.form = {};
        $scope.message = false;
        $scope.textmessage = "";
        $scope.navigation = NavigationService.getnav();
        var submitcontactform1 = function (data, status) {
            console.log(data);
            if (data != "0") {
                $scope.message = true;
                $scope.textmessage = "Saved successfully";
            } else {
                $scope.message = false;
                $scope.textmessage = "Error In Saving";
            }


        }
        $scope.allvalidation = [];

        //        ngToast.create('A toast message...');

        $scope.submitcontactform = function (form) {
            console.log(form);
            //  VALIDATION
            $scope.allvalidation = [{
                field: $scope.form.name,
                validation: ""
            }, {
                field: $scope.form.contact,
                validation: ""
            }, {
                field: $scope.form.email,
                validation: ""
            }, {
                field: $scope.form.country,
                validation: ""
            }, {
                field: $scope.form.city,
                validation: ""
            }, {
                field: $scope.form.message,
                validation: ""
            }];
            var check = formvalidation($scope.allvalidation);

            if (check) {
                NavigationService.submitcontactform(form).success(submitcontactform1);
            };


        };


        //  AUTHENTICATE
        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data == "false") {
                $scope.register = "Register";
                $scope.login = "Login";
            } else {
                $scope.register = data.name;
                $scope.login = "Logout";
            }
        }
        NavigationService.authenticate().success(authsuccess);

        //  REGISTER CLICK
        $scope.onregister = function () {
            if ($scope.register == "Register") {
                $location.url("/register");
            } else {
                $location.url("/myprofile");
            }
        }

        //  LOGIN CLICK
        $scope.onlogin = function () {
            if ($scope.login == "Login") {
                $location.url("/login");
                //                console.log("login");
            } else {
                NavigationService.logout();
                $scope.register = "Register";
                $scope.login = "Login";
            }
        }


        var staticsuccess = function (data, status) {
            $scope.content = data[0];
            //            $scope.backgroundimg = data[0].bannerimage;
            $scope.backgroundimg = "url(" + $filter('bannerimagepath')(data[0].bannerimage) + ")";
            console.log($scope.backgroundimg);
        }
        NavigationService.getsinglestaticpage(6).success(staticsuccess);
    }
);

phonecatControllers.controller('login',
    function ($scope, TemplateService, NavigationService, $location) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("login");
        TemplateService.header = 'views/headerblack.html';
        $scope.title = "login";
        TemplateService.content = 'views/login.html';
        TemplateService.title = "Login";
        $scope.navigation = NavigationService.getnav();


        //  AUTHENTICATE
        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data != "false") {
                $location.url("/home");
            }
        }
        NavigationService.authenticate().success(authsuccess);


        //  DECLARATION
        $scope.user = [];

        //  ON LOGIN
        var loginsuccess = function (data, status) {
            //            console.log(data);
            if (data == "false") {
                alert("Invalid Id Or Password");
            } else {
                $location.url("/myprofile");
            }
        }

        $scope.allvalidation = [];
        $scope.userlogin = function (user) {

            $scope.allvalidation = [{
                field: $scope.user.email,
                validation: ""
            }, {
                field: $scope.user.password,
                validation: ""
            }];
            var check = formvalidation($scope.allvalidation);

            if (check) {
                NavigationService.login(user).success(loginsuccess);
            }

        }
    }
);


phonecatControllers.controller('register',
    function ($scope, TemplateService, NavigationService, $location) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("register");
        TemplateService.header = 'views/headerblack.html';
        $scope.title = "register";
        TemplateService.content = 'views/register.html';
        TemplateService.title = "Register";
        $scope.navigation = NavigationService.getnav();


        //  AUTHENTICATE
        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data != "false") {
                $location.url("/home");
            }
        }
        NavigationService.authenticate().success(authsuccess);


        //  DECLARATION
        $scope.user = [];
        $scope.allvalidation = [];

        //  ON REGISTER
        var registersuccess = function (data, status) {
            //            console.log(data);
            if (data == "false") {
                alert("Enable To Create User");
            } else {
                $location.url("/login");
            }
        }
        $scope.createuser = function (user) {
            $scope.allvalidation = [{
                field: $scope.user.name,
                validation: ""
            }, {
                field: $scope.user.email,
                validation: ""
            }, {
                field: $scope.user.password,
                validation: ""
            }];
            var check = formvalidation($scope.allvalidation);

            if (check) {
                NavigationService.register(user).success(registersuccess);
            }

        }
    }
);

phonecatControllers.controller('policy',
    function ($scope, TemplateService, NavigationService, $location, $filter) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("policy");
        TemplateService.header = 'views/headerblack.html';
        $scope.title = "register";
        TemplateService.content = 'views/policy.html';
        TemplateService.title = "Privacy Policy";
        $scope.navigation = NavigationService.getnav();

        //  AUTHENTICATE
        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data == "false") {
                $scope.register = "Register";
                $scope.login = "Login";
            } else {
                $scope.register = data.name;
                $scope.login = "Logout";
            }
        }
        NavigationService.authenticate().success(authsuccess);

        //  REGISTER CLICK
        $scope.onregister = function () {
            if ($scope.register == "Register") {
                $location.url("/register");
            } else {
                $location.url("/myprofile");
            }
        }

        //  LOGIN CLICK
        $scope.onlogin = function () {
            if ($scope.login == "Login") {
                $location.url("/login");
                //                console.log("login");
            } else {
                NavigationService.logout();
                $scope.register = "Register";
                $scope.login = "Login";
            }
        }

        //  GET TERMS AND CONDITION PAGE
        var staticsuccess = function (data, status) {
            $scope.content = data[0];
            //            $scope.backgroundimg = data[0].bannerimage;
            $scope.backgroundimg = "url(" + $filter('bannerimagepath')(data[0].bannerimage) + ")";
            console.log($scope.backgroundimg);
        }
        NavigationService.getsinglestaticpage(8).success(staticsuccess);

    }
);

phonecatControllers.controller('checkout',
    function ($scope, TemplateService, NavigationService, $location, $filter) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("checkout");
        TemplateService.header = 'views/headertext.html';
        $scope.backgroundimg = 'Checkout.jpg';
        $scope.title = "checkout";
        TemplateService.content = 'views/checkout.html';
        TemplateService.title = "Checkout";
        $scope.navigation = NavigationService.getnav();

        //  DECLARATION
        $scope.checkout = [];
        $scope.checkout.istax = false;
        $scope.address = "";
        $scope.dob = "";
        $scope.checktax = function (check) {
            //            $scope
        }


        // THAKYOU PAGE
        var staticsuccess = function (data, status) {
            console.log(data);
            $scope.title = data[0].name;
            $scope.page = data[0];
            //            $scope.backgroundimg = data[0].bannerimage;
            $scope.backgroundimg = "url(" + $filter('bannerimagepath')(data[0].bannerimage) + ")";
            console.log($scope.backgroundimg);
        }
        NavigationService.getsinglestaticpage(10).success(staticsuccess);


        //  AUTHENTICATE
        var usersuccess = function (data, status) {
            //$scope.checkout = data[0];
        }
        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data == "false") {
                //                $location.url("/login");
                $scope.register = "Register";
                $scope.login = "Login";
            } else {
                $scope.register = data.name;
                $scope.login = "Logout";
                NavigationService.getsingleuser().success(usersuccess);
            }
        }
        NavigationService.authenticate().success(authsuccess);

        //  REGISTER CLICK
        $scope.onregister = function () {
            if ($scope.register == "Register") {
                $location.url("/register");
            } else {
                $location.url("/myprofile");
            }
        }

        //  LOGIN CLICK
        $scope.onlogin = function () {
            if ($scope.login == "Login") {
                $location.url("/login");
                //                console.log("login");
            } else {
                NavigationService.logout();
                $scope.register = "Register";
                $scope.login = "Login";
            }
        }

        //  CHECKOUT PAY AND PROCEED
        var checkoutsuccess = function (data, status) {
            $.jStorage.flush();
            $.jStorage.set("order", data);
            window.location.href = "https://www.instamojo.com/jagruti/demo-testing/?data_name=" + $scope.checkout.name + "&data_email=" + $scope.checkout.email + "&data_phone=" + $scope.checkout.mobile + "&data_amount=" + $scope.checkout.amount + "&data_Field_99651=" + $scope.checkout.projectname + "&data_Field_99652=" + data + "&data_readonly=data_amount&data_readonly=data_Field_99651&data_readonly=data_Field_99652";
        }
        $scope.payproceed = function (checkout) {
            //  VALIDATION
//            if ($scope.checkout.istax != true) {
                $scope.allvalidation = [{
                    field: $scope.checkout.name,
                    validation: ""

                }, {
                    field: $scope.checkout.email,
                    validation: ""

                }, {
                    field: $scope.checkout.mobile,
                    validation: ""

                }, {
                    field: $scope.checkout.city,
                    validation: ""

                }];

                var check = formvalidation($scope.allvalidation);
//            } else {
//            console.log($scope.checkout);
//
//                $scope.allvalidation = [{
//                    field: $scope.checkout.name,
//                    validation: ""
//
//                }, {
//                    field: $scope.checkout.email,
//                    validation: ""
//
//                }, {
//                    field: $scope.checkout.mobile,
//                    validation: ""
//
//                }, {
//                    field: $scope.checkout.city,
//                    validation: ""
//
//                }, {
//                    field: $scope.checkout.address,
//                    validation: ""
//
//                }
////                                        , {
////                    field: $scope.checkout.pan,
////                    validation: ""
////
////                }
//                                        , {
//                    field: $scope.checkout.dob,
//                    validation: ""
//
//                }];
//                var check = formvalidation($scope.allvalidation);
//
//            }

            if (check) {

                checkout.project = NavigationService.getprojectid();
                checkout.projectname = $.jStorage.get("projectname");
                checkout.amount = $.jStorage.get("amount");
                checkout.anonymous = $.jStorage.get("anonymous");
                checkout.pan = "0";
                if (checkout.istax == true) {
                    checkout.istax = "1";
                } else {
                    checkout.istax = "0";
                }
                $scope.checkout = checkout;
                NavigationService.createfrontendorder(checkout).success(checkoutsuccess);

            }
        }

    }
);

phonecatControllers.controller('faq',
    function ($scope, TemplateService, NavigationService, $location) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("faq");
        TemplateService.header = 'views/headerblack.html';
        $scope.title = "faq";
        TemplateService.content = 'views/faq.html';
        TemplateService.title = "FAQ";
        $scope.navigation = NavigationService.getnav();

        //  AUTHENTICATE
        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data == "false") {
                $scope.register = "Register";
                $scope.login = "Login";
            } else {
                $scope.register = data.name;
                $scope.login = "Logout";
            }
        }
        NavigationService.authenticate().success(authsuccess);

        //  REGISTER CLICK
        $scope.onregister = function () {
            if ($scope.register == "Register") {
                $location.url("/register");
            } else {
                $location.url("/myprofile");
            }
        }

        //  LOGIN CLICK
        $scope.onlogin = function () {
            if ($scope.login == "Login") {
                $location.url("/login");
                //                console.log("login");
            } else {
                NavigationService.logout();
                $scope.register = "Register";
                $scope.login = "Login";
            }
        }

    }
);

phonecatControllers.controller('thankyou',
    function ($scope, TemplateService, NavigationService, $location, $filter) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Thank You");
        TemplateService.header = 'views/headertext.html';
        $scope.title = "thank you";
        //        $scope.backgroundimg = "Thank-you.jpg";
        TemplateService.content = 'views/thankyou.html';
        TemplateService.title = "Thank you";
        $scope.navigation = NavigationService.getnav();

        //  AUTHENTICATE
        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data == "false") {
                $scope.register = "Register";
                $scope.login = "Login";
            } else {
                $scope.register = data.name;
                $scope.login = "Logout";
            }
        }
        NavigationService.authenticate().success(authsuccess);

        // THAKYOU PAGE
        var staticsuccess = function (data, status) {
            console.log(data);
            $scope.title = data[0].name;
            $scope.page = data[0];
            //            $scope.backgroundimg = data[0].bannerimage;
            $scope.backgroundimg = "url(" + $filter('bannerimagepath')(data[0].bannerimage) + ")";
        }
        NavigationService.getsinglestaticpage(9).success(staticsuccess);

        //  GET ALL COUPON
        var couponsuccess = function (data, status) {
            console.log(data);
            $scope.coupons = data;
        }
        NavigationService.getallcouponold().success(couponsuccess);

        //  REGISTER CLICK
        $scope.onregister = function () {
            if ($scope.register == "Register") {
                $location.url("/register");
            } else {
                $location.url("/myprofile");
            }
        }

        //  LOGIN CLICK
        $scope.onlogin = function () {
            if ($scope.login == "Login") {
                $location.url("/login");
                //                console.log("login");
            } else {
                NavigationService.logout();
                $scope.register = "Register";
                $scope.login = "Login";
            }
        }

    }
);

phonecatControllers.controller('Teampage',
    function ($scope, TemplateService, NavigationService, $location) {
        $scope.template = TemplateService;

        $scope.menutitle = NavigationService.makeactive("Team Page");
        TemplateService.header = 'views/headertext.html';
        $scope.title = "Our Team";
        $scope.backgroundimg = "Team-&-Advisors.jpg";
        TemplateService.content = 'views/teampage.html';
        TemplateService.title = "Team Page";
        $scope.navigation = NavigationService.getnav();

        //  AUTHENTICATE
        var authsuccess = function (data, status) {
            //            console.log("auth auth auth");
            //            console.log(data);
            if (data == "false") {
                $scope.register = "Register";
                $scope.login = "Login";
            } else {
                $scope.register = data.name;
                $scope.login = "Logout";
            }
        }
        NavigationService.authenticate().success(authsuccess);

        //  REGISTER CLICK
        $scope.onregister = function () {
            if ($scope.register == "Register") {
                $location.url("/register");
            } else {
                $location.url("/myprofile");
            }
        }

        //  LOGIN CLICK
        $scope.onlogin = function () {
            if ($scope.login == "Login") {
                $location.url("/login");
                //                console.log("login");
            } else {
                NavigationService.logout();
                $scope.register = "Register";
                $scope.login = "Login";
            }
        }

    }
);
phonecatControllers.controller('headerctrl',
    function ($scope, TemplateService) {
        $scope.template = TemplateService;

        $scope.demo = "fsdfasfa";

    }
);

phonecatControllers.controller('footer',
    function ($scope, TemplateService, $location, NavigationService) {
        $scope.template = TemplateService;

        //  DECLARATION
        $scope.message = false;

        //  ALL FOOTER
        var pagesuccess = function (data, status) {
            //            console.log(data);
            $scope.pages = data;
        }
        NavigationService.getstaticpages().success(pagesuccess);

        //  TO OTHER PAGES
        $scope.topages = function (page) {
            switch (page.id) {
            case "1":
            case "2":
            case "3":
                {
                    $location.url("/aboutUs/" + page.id);
                    break;
                }
            case "4":
                {
                    $location.url("/works/" + page.id);
                    break;
                }
            case "5":
                {
                    $location.url("/workwithus/" + page.id);
                    break;
                }
            case "6":
                {
                    $location.url("/contactus/" + page.id);
                    break;
                }
            }
        }

        //  GET ALL CATEGORY
        var allcategoriessuccess = function (data, status) {
            //            console.log("categories");
            //            console.log(data);
            $scope.categories = data.queryresult;
        }
        NavigationService.getallcategory().success(allcategoriessuccess);

        //	ON NEWSLETTER

        var submitnewsletter1 = function (data, status) {
            console.log(data);
            if (data != "0") {
                $scope.message = true;
                $scope.textmessage = "Saved successfully";
            } else {
                $scope.message = false;
                $scope.textmessage = "Error In Saving";
            }
        }


        $scope.allvalidation = [];
        $scope.news = [];
        $scope.submitnewsletter = function (news) {
            //            console.log(news);
            //  VALIDATION
            $scope.allvalidation = [{
                field: $scope.news.email,
                validation: ""

            }];
            var check = formvalidation($scope.allvalidation);

            if (check) {
                NavigationService.submitnewsletter(news).success(submitnewsletter1);
            }
        }
    }
);