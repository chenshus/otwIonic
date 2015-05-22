/**
 * Created by chen4_000 on 4/23/2015.
 */
(function(){

    angular.module('app.register')
        .controller ('Register', Register);

    function Register ($scope ,RegisterService,$state){
        var vm= this;
        $scope.ServerMessage="";

        $scope.register= function (registerData){
            RegisterService.Register(registerData).
                success(function(data,status){
                    $state.go('login');
            }).
                error(function(data,status){
                    $scope.ServerMessage=data;
                });
        }
    }

})();