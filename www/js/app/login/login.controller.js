(function() {

    angular
        .module('app.login')
        .controller('Login', Login);

<<<<<<< HEAD
    function Login( $scope, $state, loginService, $cordovaFacebook, $rootScope) {
=======
    function Login( $scope, $state,loginService) {
>>>>>>> 8ca236f789129bebcf49d8448f298e6cdd76c588

        $scope.doLogin = function(loginData) {
            loginService.SignIn("1");

            console.log(loginData.username);
            $state.go('app.myProfile');
        };

<<<<<<< HEAD
        $scope.fbLogin = function() {
            $cordovaFacebook.login(["public_profile", "email", "user_friends"])
                .then(function(success) {
                    $rootScope.userID = success.authResponse.userID;
                    $state.go('app.myProfile');
                }, function (error) {
                    // error
                });
        };
=======

        $scope.fbLogin = function() {

            openFB.login(
                function(response) {
                    if (response.status === 'connected') {
                        console.log('Facebook login succeeded');
                        $scope.closeLogin();
                        $state.go('app.myProfile');
                    } else {
                        alert('Facebook login failed');
                    }
                },
                {scope: 'email,publish_actions'}
            );
            openFB.api({path: '/me/friends', success: successHandler, error: errorHandler});
        }
>>>>>>> 8ca236f789129bebcf49d8448f298e6cdd76c588
    }
})();






























//            openFB.login(
//                function(response) {
//                    if (response.status === 'connected') {
//                        console.log('Facebook login succeeded');
//                        $scope.closeLogin();
//                        $state.go('app.myProfile');
//                    } else {
//                        alert('Facebook login failed');
//                    }
//                },
//                {scope: 'email,publish_actions'}
//            );
//            openFB.api({path: '/me/friends', success: successHandler, error: errorHandler});
