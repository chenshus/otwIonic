/**
 * Created by chen4_000 on 2/15/2015.
 */
(function() {
    'use strict';
    angular.module('app.mainFeedItems')
        .factory("mainFeedItemsService",mainFeedItemsService);
    mainFeedItemsService.$inject=['$http','Const','Socket'];


    function mainFeedItemsService($http,Const){

        var Server = {
            GetFeeds :GetFeeds
        };
        return Server;

        function GetFeeds (){

            var promise= $http.get(Const.ServerUrl+'GetFeeds')
                .then(function(data){
                    return data.data;
                })
                .catch(function(message){
                    console.log(message);
                });
            return promise;
            /* var postFeed = $resource(Const.ServerUrl +'newFeed',{
             Feed:newFeed});

             postFeed.save(function (data){
             console.log(data);
             });*/
        }
    }
})();