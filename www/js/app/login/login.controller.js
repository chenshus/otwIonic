(function() {

    angular
        .module('app.login')
        .controller('Login', Login);

    function Login( $scope, $state, loginService, $cordovaFacebook, $rootScope) {

        $scope.doLogin = function(loginData) {
            loginService.SignIn("1");

            console.log(loginData.username);
            $state.go('app.myProfile');
        };

        $scope.fbLogin = function() {
            $cordovaFacebook.login(["public_profile", "email", "user_friends"])
                .then(function(success) {
                    $rootScope.userID = success.authResponse.userID;
                    $state.go('app.myProfile');
                }, function (error) {
                    // error
                });
        };
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