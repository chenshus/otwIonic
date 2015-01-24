(function() {

    angular
        .module('app.myProfile')
        .controller('MyProfile', MyProfile);

    function MyProfile($scope,$state) {
        $scope.section = 'MyProfile';

        $scope.navTitle = '<span> <i class="icon ion-person">&nbsp; My Profile</i></span>';
    }
})();
