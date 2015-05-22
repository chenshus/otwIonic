/**
 * Created by chen4_000 on 4/23/2015.
 */
(function(){

    angular.module('app.myProfile')
        .factory('MyProfileService',MyProfileService);
    MyProfileService.$inject=['$http','Const'];

    function MyProfileService($http,Const){

        var Server = {

            GetProfileFeeds :GetProfileFeeds
        };
        return Server;

        function GetProfileFeeds (User){
               var promise = $http.post(Const.ServerUrl+"GetFeedsByUserId",User)
                    .then(function (data){
                        return data.data;
                    })
                    .catch(function(err){

                    });
            return promise;
        }
    }


})();