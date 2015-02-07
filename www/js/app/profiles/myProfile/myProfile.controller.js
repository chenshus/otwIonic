(function() {

    angular
        .module('app.myProfile')
        .controller('MyProfile', MyProfile);

    function MyProfile($scope,$state,Socket) {
        $scope.section = 'MyProfile';

        $scope.navTitle = '<span> <i class="icon ion-person">&nbsp; My Profile</i></span>';

        Socket.on('chen',function (data){
            console.log(data);
            Socket.emit('helo', 'thanks!');
        });
    }
})();
