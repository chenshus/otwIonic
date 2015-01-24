(function() {

    angular
        .module('app.mainFeed')
        .controller('MainFeed', MainFeed);

    function MainFeed($scope, $ionicPopover) {

        $scope.navTitle = '<span> <i class="icon ion-social-rss">&nbsp; Feed</i></span>';

        $scope.footerTabs = [
            {"value":"Post","id":"post", "icon":"ion-android-textsms", "onClickOpen":"openPopover($event)"},
            {"value":"Check-In","id":"checkIn", "icon":"ion-map", "onClickOpen":"openPopover($event)"}
        ];

        $ionicPopover.fromTemplateUrl('js/app/layout/post/post.html', {
			id: 'post',
            backdropClickToClose: false,
            scope: $scope
        }).then(function(popover) {
            $scope.postPopover = popover;
        });

        $ionicPopover.fromTemplateUrl('js/app/layout/checkIn/checkIn.html', {
			id: 'checkIn',
            backdropClickToClose: false,
            scope: $scope
        }).then(function(popover) {
            $scope.checkInPopover = popover;
        });

        $scope.openPopover = function($event) {
            var id = $event.currentTarget.id;

            if(id == 'post'){
                $scope.postPopover.show($event);
            }
            if(id == 'checkIn'){
                $scope.checkInPopover.show($event);
            }
        };

        $scope.closePopover = function($event) {
            if($event.currentTarget.id == 'post') $scope.postPopover.hide();
            if($event.currentTarget.id == 'checkIn') $scope.checkInPopover.hide();
        };

        //Cleanup the popover when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.postPopover.remove();
            $scope.checkInPopover.remove();
        });

        // Execute action on hide popover
        $scope.$on('popover.hidden', function() {
            // Execute action
        });
        // Execute action on remove popover
        $scope.$on('popover.removed', function() {
            // Execute action
        });
    }
})();
