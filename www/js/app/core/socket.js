/**
 * Created by chen4_000 on 2/6/2015.
 */
(function(){
    angular
        .module('app.core')
       .factory('Socket',Socket);

    function Socket(Const,$rootScope,socketFactory){

       var socket = io.connect(Const.ServerUrl);

       var factory= socketFactory({
           ioSocket :socket
       });
       return factory;
    }
})();