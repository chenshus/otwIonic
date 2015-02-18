
(function() {
    'use strict';
    angular.module('app.post')
        .factory("postService",postService);
    postService.$inject=['$resource','Const','Socket'];


    function postService($resource,Const,Socket){

        var Server = {
            PostNewFeed :PostNewFeed
        };
        return Server;

        function PostNewFeed (newFeed){
            Socket.emit('PostNewFeed',newFeed);
            /* var postFeed = $resource(Const.ServerUrl +'newFeed',{
             Feed:newFeed});

             postFeed.save(function (data){
             console.log(data);
             });*/
        }
    }
})();