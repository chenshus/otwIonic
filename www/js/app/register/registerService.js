/**
 * Created by chen4_000 on 4/23/2015.
 */
(function (){

    angular.module('app.register')
        .factory('RegisterService',RegisterService);
    RegisterService.$inject=['$http','Const'];

    function RegisterService($http,Const){

        var Service = {
            Register :Register
        };

        return Service;

        function Register (RegisterData){

           return  $http.post(Const.ServerUrl+'Register',RegisterData);


        }
    }

})();