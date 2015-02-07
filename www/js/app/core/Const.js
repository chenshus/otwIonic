/**
 * Created by chen4_000 on 2/6/2015.
 */
(function(){
    angular
        .module('app.core')
        .factory('Const',Const);

    function Const(){

        var ConstFactory ={
            ServerUrl : 'http://localhost:3000/'
        };
        return ConstFactory;

    }
})();