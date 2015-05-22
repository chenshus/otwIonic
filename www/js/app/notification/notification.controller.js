/**
 * Created by chen4_000 on 4/25/2015.
 */

(function (){

angular.module('app.notification')
    .controller('NotificationController',NotificationController);

    function NotificationController (){

        $rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {
            console.log('Got token', data.token, data.platform);
            // Do something with the token
        });
    }








})();
