(function() {

    angular
        .module('app.myRequests')
        .controller('MyRequests', MyRequests);

    function MyRequests($scope,$state) {
        $scope.navTitle = '<span> <i class="icon ion-paper-airplane">&nbsp; My Requests</i></span>';
    }
})();
