var admin_url = "http://wohlig.co.in/powerforone/index.php/";
//var admin_url = "http://localhost/powerforone/index.php/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
    var navigation = [{
        name: "Explore projects",
         classis: "",
        link:"#/explore/0",
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
              var category = 0;  
              $http.get(admin_url+ 'json/getprojectbycategory?category=' + category,{}).success(callback);
          },
         getallproject:function(category)
          { 
              return $http.get(admin_url+ 'json/getprojectbycategory?category=' + category,{});
          },
         displaytestmonial:function(callback)
          {
             
              $http.get(admin_url+ 'json/viewtestimonialjson').success(callback);
          },
         getallcategory:function()
          {
             
              return $http.get(admin_url+ 'jsonbyavi/getallcategory',{});
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