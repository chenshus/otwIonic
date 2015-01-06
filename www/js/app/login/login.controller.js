(function() {

    angular
        .module('login')
        .controller('Login', Login);

    function Login( $scope, $state) {
        $scope.doLogin = function(loginData) {
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
        }
    }
})();

