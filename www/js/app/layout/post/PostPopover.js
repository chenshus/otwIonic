/**
 * Created by chen4_000 on 2/14/2015.
 */
(function() {
    'use strict';
    angular.module('app.post')
        .factory("postPopover",postPopover);

    function postPopover($ionicPopover){


        var Server = {
            Popover :'',
            InitializePopover :InitializePopover
        };

        return Server;

        function InitializePopover (scope){
            $ionicPopover.fromTemplateUrl('js/app/layout/post/post.html', {
                id: 'post',
                backdropClickToClose: false,
                scope:scope
            }).then(function(popover) {
                Server.Popover =popover;

            });
        }}
})();