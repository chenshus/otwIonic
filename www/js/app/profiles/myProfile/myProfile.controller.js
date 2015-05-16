(function() {

    angular
        .module('app.myProfile')
        .controller('MyProfile', MyProfile);

    function MyProfile($scope, $state, Socket, $cordovaFacebook, $rootScope, $localStorage,MyProfileService) {



        $scope.section = 'MyProfile';
        $scope.Username =$localStorage.User.Username;
        $scope.UserFeeds =[];



      /*  $ionicPush.register({
            canShowAlert: true, //Should new pushes show an alert on your screen?
            canSetBadge: true, //Should new pushes be allowed to update app icon badges?
            canPlaySound: true, //Should notifications be allowed to play a sound?
            canRunActionsOnWake: true, // Whether to run auto actions outside the app,
            onNotification: function(notification) {
                // Called for each notification.
            }
        });*/


        (function(){
            if($localStorage.loginCerdinals != null){
                $scope.userid = $localStorage.loginCerdinals.userID;
            }
        })();

        var user = {
            Email: $localStorage.User.Email
        };
        MyProfileService.GetProfileFeeds(user).then(function(feeds){
            feeds.forEach(function(feed){
                $scope.UserFeeds.push(feed);
            })
        });


        $scope.navTitle = '<span> <i class="icon ion-person">&nbsp; My Profile</i></span>';




    }
})();
