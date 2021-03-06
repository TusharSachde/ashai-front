var admin_url = "http://www.powerforone.org/admin/index.php/";
// var admin_url = "http://localhost/powerforone/index.php/";
// var adminurl = "http://wohlig.co.in/powerforone/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
    var navigation = [{
        name: "Explore projects",
        classis: "",
        link: "#/explore/0",
        subnav: []
    }, {
        name: "How it works",
        active: "",
        link: "#/works",
        subnav: []
    }, {
        name: "The fellowship",
        classis: "",
        link: "#/fellowship",
        subnav: []
    }];

    var donation = [{
        val: "500",
        period: "One Time",
        select: "selected",
        name: "0"
    }, {
        val: "500",
        period: "Monthly",
        select: "",
        name: "1"
    }, {
        val: "500",
        period: "Quarterly",
        select: "",
        name: "2"
    }, {
        val: "500",
        period: "Yearly",
        select: "",
        name: "3"
    }, ];

    return {
        getnav: function () {
            return navigation;
        },
        displayfrmdb: function (callback) {
            var category = 0;
            $http.get(admin_url + 'json/getprojectbycategory?category=' + category, {}).success(callback);
        },
        setprojectid: function (id) {
            $.jStorage.set("projectid", id);
        },
        getdonation: function () {
            return donation;
        },
        getprojectid: function (id) {
            return $.jStorage.get("projectid");
        },
        createfrontendorder: function (checkout) {
            console.log(checkout.name);
            return $http({
                url: admin_url + "json/createfrontendorder",
                method: "POST",
                data: {
                    "name": checkout.name,
                    "email": checkout.email,
                    "mobile": checkout.mobile,
                    "city": checkout.city,
                    "address": checkout.address,
                    "pan": checkout.pan,
                    "dob": checkout.dob,
                    "project": checkout.project,
                    "amount": checkout.amount,
                    "istax": checkout.istax,
                    "anonymous": checkout.anonymous,
                    "give": checkout.give,
                    "referral": checkout.referral
                }
            })
        },
        getsingleblog: function (id) {
            return $http.get(admin_url + 'json/getsingleblog?id=' + id, {});
        },
        viewstaticpage: function (id) {
            return $http.get(admin_url + 'json/viewstaticpage?id=' + id, {});
        },
        getallcouponold: function () {
            return $http.get(admin_url + 'json/getallcoupon', {});
        },
        authenticate: function () {
            return $http.get(admin_url + 'json/authenticate', {});
        },
        getsingleuser: function () {
            return $http.get(admin_url + 'json/getsingleuser ', {});
        },
        getblog: function () {
            return $http.get(admin_url + 'json/getallblog', {});
        },
        getstaticpages: function () {
            return $http.get(admin_url + 'json/getstaticpages', {});
        },
        getprojectbycategoryarray: function (category) {
            return $http.get(admin_url + 'json/getprojectbycategoryarray?category=' + category, {});
        },
        getallproject: function (category) {
            return $http.get(admin_url + 'json/getprojectbycategory?category=' + category, {});
        },
        getsinglestaticpage: function (id) {
            return $http.get(admin_url + 'json/getsinglestaticpage?id=' + id, {});
        },
        displaytestmonial: function (callback) {

            $http.get(admin_url + 'json/viewtestimonialjson').success(callback);
        },
        getallcategory: function () {

            return $http.get(admin_url + 'jsonbyavi/getallcategory', {});
        },
        logout: function () {

            return $http.get(admin_url + 'json/logout', {});
        },
        getsingleproject: function (id, callback) {

            $http.get(admin_url + 'json/getsingleproject?id=' + id).success(callback);
        },
        login: function (user) {
            return $http({
                url: admin_url + "json/login",
                method: "POST",
                data: {
                    'email': user.email,
                    'password': user.password
                }
            });
        },
        register: function (user) {
            return $http({
                url: admin_url + "json/register",
                method: "POST",
                data: {
                    'name': user.name,
                    'email': user.email,
                    'password': user.password
                }
            });
        },
        sendwelcomeemail: function (thankyou) {
            return $http({
                url: admin_url + "json/sendwelcomeemail",
                method: "POST",
                data: {
                    'name': thankyou.name,
                    'email': thankyou.email,
                    'hashcode': thankyou.hashcode
                }
            });
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        forgotpassword: function (form) {
            return $http.get(admin_url + "email/forgotpassword?email="+form.email, {});
        },
        submitcontactform: function (form) {
            return $http.post(admin_url + "json/createcontactus", form);
        },
        submitworkwithus: function (form1) {
            return $http.post(admin_url + "json/createworkwithus", form1);
        },
        submitpfo: function (form2) {
            return $http.post(admin_url + "json/createpfo", form2);
        },
        submitnewsletter: function (news) {
            return $http({
                url: admin_url + "json/createnewsletter",
                method: "POST",
                data: {
                    "email": news.email
                }
            })
        },
        forgotpasswordsubmit: function (password,id) {
            console.log(password);
            console.log(id);
            return $http({
                url: admin_url + "json/forgotpasswordsubmit",
                method: "POST",
                data: {
                    "password":password,
                    "hashcode":id
                }
            })
        }
    }
});