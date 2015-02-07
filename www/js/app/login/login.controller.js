(function() {

    angular
        .module('app.login')
        .controller('Login', Login);

    function Login( $scope, $state,loginService) {
        loginService.SignIn("1");
        $scope.doLogin = function(loginData) {
            loginService.SignIn("1");

            console.log(loginData.username);
            $state.go('app.myProfile');
        };

        function successHandler(response){
            console.log(response)
        }
        function errorHandler(response){
            console.log(response)
        }
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
        }
    }
})();

