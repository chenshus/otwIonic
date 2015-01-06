(function() {

    angular
        .module('app.customersRequests')
        .controller('CustomersRequests', CustomersRequests);

    function CustomersRequests($scope,$state) {
        $scope.navTitle = '<span> <i class="icon ion-archive">&nbsp; Customers Requests</i></span>';
    }
})();