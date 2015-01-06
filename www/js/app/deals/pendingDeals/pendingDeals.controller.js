(function() {

    angular
        .module('app.pendingDeals')
        .controller('PendingDeals', PendingDeals);

    function PendingDeals($scope,$state) {
        $scope.navTitle = '<span> <i class="icon ion-unlocked">&nbsp; Pending Deals</i></span>';
    }
})();

