(function() {

    angular
        .module('app.login')
        .controller('Login', Login);

    function Login( $scope, $state,loginService) {

        $scope.doLogin = function(loginData) {
            loginService.SignIn("1");

            console.log(loginData.username);
            $state.go('app.myProfile');
        };


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
    }
})();

