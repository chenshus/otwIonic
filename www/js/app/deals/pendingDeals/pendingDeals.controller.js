(function() {

    angular
        .module('app.pendingDeals')
        .controller('PendingDeals', PendingDeals);

    function PendingDeals($scope) {

        $scope.navTitle = '<span> <i class="icon ion-unlocked">&nbsp; Pending Deals</i></span>';
    }
})();

