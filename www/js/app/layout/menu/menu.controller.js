(function (){

    angular
        .module('app.layout')
        .controller('Menu',Menu);



    function Menu($scope, routerHelper){

        $scope.menuItems = [
            {"title":"Profile", "stateName":"app.myProfile", "shortHref":"myProfile", "icon":"ion-person", "notificationsBadgeClass":""},
            {"title":"Feed", "stateName":"app.mainFeed", "shortHref":"mainFeed", "icon":"ion-social-rss", "notificationsBadgeClass":""},
            {"title":"Customers Requests", "stateName":"app.customersRequests", "shortHref":"customersRequests", "icon":"ion-archive", "notificationsBadgeClass":"customersRequestsNotifications"},
            {"title":"My Requests", "stateName":"app.myRequests", "shortHref":"myRequests", "icon":"ion-paper-airplane", "notificationsBadgeClass":""},
            {"title":"Pending Deals", "stateName":"app.pendingDeals", "shortHref":"pendingDeals", "icon":"ion-unlocked", "notificationsBadgeClass":"pendingDealsNotifications"},
            {"title":"Settings", "stateName":"app.settings", "shortHref":"settings", "icon":"ion-gear-b", "notificationsBadgeClass":""}
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

        $scope.showNotificationsBadge = function(menuItem){
            return menuItem.notificationsBadgeClass != "";
        }
    }











})();