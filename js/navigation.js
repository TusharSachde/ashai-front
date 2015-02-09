var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function () {
    var navigation = [{
        name: "Explore projects",
        classis: "active",
        link:"#/explore",
        subnav: []
    }, {
        name: "How it works",
        active: "",
        link:"#/works",
        subnav: []
    }, {
        name: "Join the pro army",
        classis: "",
        link:"#/proarmy",
        subnav: []
    }];

    return {
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
            for(var i=0;i<navigation.length;i++) {
                if(navigation[i].name==menuname)
                {
                    navigation[i].classis="";
                }
                else {
                    navigation[i].classis="";
                }
            }
            return menuname;
        },
        
    }
});