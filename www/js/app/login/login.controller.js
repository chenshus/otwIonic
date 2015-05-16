(function() {

    angular
        .module('app.login')
        .controller('Login', Login);

    function Login( $scope, $state, loginService, $cordovaFacebook, $rootScope, $localStorage,$ionicPush) {

        $scope.userNotLoggedIn = false;

        $scope.init = function () {






            var storedLogin = $localStorage.loginCerdinals;
            var userData =$localStorage.User;
            if((storedLogin != null && storedLogin != 'undefined' && storedLogin != '') ||( userData != null && userData != 'undefined' && userData != '')){
                if(userData.Username || (storedLogin.accessToken.length > 0 && storedLogin.userID.length > 0 ) ){
                    $state.go('app.myProfile');
                }
            } else {
                $scope.userNotLoggedIn = true;
            }
        };

        $scope.doLogin = function(loginData) {

            loginService.SignIn(loginData).
                success(function(data,status){
                    $localStorage.User =data;
                    $state.go('app.myProfile');
                }).
                error(function(data,status){
                    $scope.ServerMessage=data;
                });

        };

        $scope.fbLogin = function() {
            $cordovaFacebook.login(["public_profile", "email", "user_friends"])
                .then(function(success) {
                    $localStorage.loginCerdinals = success.authResponse;
                    $state.go('app.myProfile');
                }, function (error) {
                    $state.go('login');
                });
        };

        $scope.register = function (){

            $state.go('register');
        }

    }
})();