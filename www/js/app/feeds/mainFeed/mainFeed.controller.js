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


        $scope.items = [
            { id: 0 },
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 },
            { id: 13 },
            { id: 14 },
            { id: 15 },
            { id: 16 },
            { id: 17 },
            { id: 18 },
            { id: 19 },
            { id: 20 },
            { id: 21 },
            { id: 22 },
            { id: 23 },
            { id: 24 },
            { id: 25 },
            { id: 26 },
            { id: 27 },
            { id: 28 },
            { id: 29 },
            { id: 30 },
            { id: 31 },
            { id: 32 },
            { id: 33 },
            { id: 34 },
            { id: 35 },
            { id: 36 },
            { id: 37 },
            { id: 38 },
            { id: 39 },
            { id: 40 },
            { id: 41 },
            { id: 42 },
            { id: 43 },
            { id: 44 },
            { id: 45 },
            { id: 46 },
            { id: 47 },
            { id: 48 },
            { id: 49 },
            { id: 50 }
        ];

        $scope.edit = function(item) {
            alert('Edit Item: ' + item.id);
        };
        $scope.share = function(item) {
            alert('Share Item: ' + item.id);
        };
    }
})();
