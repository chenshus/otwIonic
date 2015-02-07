/**
 * Created by chen4_000 on 2/6/2015.
 */
(function() {

    angular
            .module('app.login')
            .factory('loginService',loginService);

    function loginService($http,Const,Socket){

        Socket.on('something',function (data){
            console.log(data);
            Socket.emit('helo', 'thanks!');
        });



        var url = Const.ServerUrl;

        var Service ={
            SignIn :SignIn
        };
        return Service;

        function SignIn (userId){

            return $http.get(url+'Sign_In')
                .then(function(data){
                    console.log("hi lok ar"+data)
                })
                .catch(function(message){

                })
        }

    }
})();