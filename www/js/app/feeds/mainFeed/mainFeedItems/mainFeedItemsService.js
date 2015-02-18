/**
 * Created by chen4_000 on 2/15/2015.
 */
(function() {
    'use strict';
    angular.module('app.mainFeedItems')
        .factory("mainFeedItemsService",mainFeedItemsService);
    mainFeedItemsService.$inject=['$resource','Const','Socket'];


    function mainFeedItemsService($http,Const,Socket){

        var Server = {
            GetFeeds :GetFeeds
        };
        return Server;

        function GetFeeds (){

            return $http.get(Const.ServerUrl+'GetFeeds')
                .then(function(data){
                    console.log("hi lok ar"+data)
                })
                .catch(function(message){
                    console.log(message);
                })
            /* var postFeed = $resource(Const.ServerUrl +'newFeed',{
             Feed:newFeed});

             postFeed.save(function (data){
             console.log(data);
             });*/
        }
    }
})();