(function() {

    angular
        .module('app.settings')
        .controller('Settings', Settings);

    function Settings($scope) {

        $scope.navTitle = '<span> <i class="icon ion-gear-b">&nbsp; Settings</i></span>';
    }
})();

