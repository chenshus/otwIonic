/**
 * Created by chen4_000 on 2/14/2015.
 */
(function() {
    'use strict';
    angular.module('app.post')
        .factory("postModal",postModal);

    function postModal($ionicModal){


        var Server = {
            Modal :'',
            InitializeModal :InitializeModal
        };

        return Server;

        function InitializeModal (scope){
            $ionicModal.fromTemplateUrl('js/app/layout/post/post.html', {
                id: 'post',
                backdropClickToClose: false,
                scope:scope
            }).then(function(modal) {
                Server.Modal = modal;

            });
        }}
})();