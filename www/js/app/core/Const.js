/**
 * Created by chen4_000 on 2/6/2015.
 */
(function(){
    angular
        .module('app.core')
        .factory('Const',Const);

    function Const(){

        var ConstFactory ={
            ServerUrl : 'https://frozen-meadow-3938.herokuapp.com/'
        };
        return ConstFactory;

    }
})();