/**
 * Created by chen4_000 on 2/14/2015.
 */
(function() {
    'use strict';
    angular.module('app.post')
        .factory("checkInModal",checkInModal);

    function checkInModal($ionicModal){

        var Server = {
            Modal :'',
            InitializeModal :InitializeModal
        };

        return Server;

        function InitializeModal (scope){
            $ionicModal.fromTemplateUrl('js/app/layout/checkIn/checkIn.html', {
                id: 'post',
                backdropClickToClose: false,
                scope:scope
            }).then(function(modal) {
                Server.Modal =modal;

            });
        }}
})();