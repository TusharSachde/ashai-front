var admin_url = "http://wohlig.co.in/powerforone/index.php/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
    var navigation = [{
        name: "Explore projects",
         classis: "",
        link:"#/explore",
        subnav: []
    }, {
        name: "How it works",
        active: "",
        link:"#/works",
        subnav: []
    }, {
        name: "The fellowship",
        classis: "",
        link:"#/fellowship",
        subnav: []
    }];

    return {
        getnav: function() {
            return navigation;
        },
         displayfrmdb:function(callback)
          {
             
              $http.get(admin_url+ 'json/viewprojectjson').success(callback);
          },
         displaytestmonial:function(callback)
          {
             
              $http.get(admin_url+ 'json/viewtestimonialjson').success(callback);
          },
         getsingleproject:function(id,callback)
          {
             
              $http.get(admin_url+ 'json/getsingleproject?id='+id).success(callback);
          },
        makeactive: function(menuname) {
            for(var i=0;i<navigation.length;i++) {
                if(navigation[i].name==menuname)
                {
                    navigation[i].classis="active";
                }
                else {
                    navigation[i].classis="";
                }
            }
            return menuname;
        },
        
    }
});