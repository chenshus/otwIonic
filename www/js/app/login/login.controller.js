(function() {

    angular
        .module('app.login')
        .controller('Login', Login);

    function Login( $scope, $state, loginService, $cordovaFacebook, $rootScope, $localStorage) {

        $scope.doLogin = function(loginData) {
            loginService.SignIn("1");
            console.log(loginData.username);
            $state.go('app.myProfile');
        };

        $scope.fbLogin = function() {
            var storedLogin = $localStorage.loginCerdinals;
            if(storedLogin != null && storedLogin != 'undefined' && storedLogin != ''){
                if(storedLogin.accessToken.length > 0 && storedLogin.userID.length > 0){
                    $state.go('app.myProfile');
                }
            } else {
                $cordovaFacebook.login(["public_profile", "email", "user_friends"])
                    .then(function(success) {
                        $localStorage.loginCerdinals = success.authResponse;
                        $state.go('app.myProfile');
                    }, function (error) {
                        $state.go('app.login');
                    });
            }
        };
    }
})();