/**
 * Created by chen4_000 on 2/6/2015.
 */
(function() {

    angular
            .module('app.login')
            .factory('loginService',loginService);

    function loginService($http,Const,Socket){

        var url = Const.ServerUrl;

        var Service ={
            SignIn :SignIn
        };
        return Service;

        function SignIn (user){

            return $http.post(url+'Sign_In',user);

        }

    }
})();