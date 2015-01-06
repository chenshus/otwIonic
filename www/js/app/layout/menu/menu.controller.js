(function (){

    angular
        .module('app.layout')
        .controller('Menu',Menu);



    function Menu($scope, routerHelper){

        $scope.menuItems = [
            {"title":"Profile", "stateName":"app.myProfile", "shortHref":"myProfile", "icon":"ion-person"},
            {"title":"Feed", "stateName":"app.mainFeed", "shortHref":"mainFeed", "icon":"ion-social-rss"},
            {"title":"Customers Requests", "stateName":"app.customersRequests", "shortHref":"customersRequests", "icon":"ion-archive"},
            {"title":"My Requests", "stateName":"app.myRequests", "shortHref":"myRequests", "icon":"ion-paper-airplane"},
            {"title":"Pending Deals", "stateName":"app.pendingDeals", "shortHref":"pendingDeals", "icon":"ion-unlocked"},
            {"title":"Settings", "stateName":"app.settings", "shortHref":"settings", "icon":"ion-gear-b"}
        ];

        var vm = this;
        var states = routerHelper.getStates();

        activate();

        function activate(){ getNavRoutes();}

        function getNavRoutes() {
            vm.navRoutes = states.filter(function(r) {
                return r.settings && r.settings.nav;
            }).sort(function(r1, r2) {
                return r1.settings.nav - r2.settings.nav;
            });
        }
    }











})();