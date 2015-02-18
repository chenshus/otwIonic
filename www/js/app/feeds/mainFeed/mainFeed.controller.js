(function() {

    angular
        .module('app.mainFeed')
        .controller('MainFeed', MainFeed);

    function MainFeed($scope, $ionicPopover,Socket,$rootScope,postModal,checkInModal, $ionicModal) {

        $scope.navTitle = '<span> <i class="icon ion-social-rss">&nbsp; Feed</i></span>';

        $scope.footerTabs = [
            {"value":"Post","id":"post", "icon":"ion-android-textsms", "onClickOpen":"openModal($event)"},
            {"value":"Check-In","id":"checkIn", "icon":"ion-map", "onClickOpen":"openModal($event)"}
        ];

        var modals =[
            {name:'post', ModalService :postModal},
            {name:'checkIn', ModalService :checkInModal}
        ];
<<<<<<< Updated upstream
        modals.forEach(function(modal){
            modal.ModalService.InitializeModal($scope);
=======
        popovers.forEach(function(popover){
            popover.PopoverService.InitializePopover();
>>>>>>> Stashed changes
        });


        $scope.openModal = function($event) {
            var id = $event.currentTarget.id;
            modals.forEach(function (modal) {
                if(modal.name==id){
                    modal.ModalService.Modal.show($event);
                }
            });
        };

        //Cleanup the popover when we're done with it!
        $scope.$on('$destroy', function() {
            modals.forEach(function (popover) {
                modal.ModalService.Modal.remove();
            });
        });

        // Execute action on hide popover
        $scope.$on('modal.hidden', function() {
            // Execute action
        });
        // Execute action on remove popover
        $scope.$on('modal.removed', function() {
            // Execute action
        });

        $scope.edit = function(item) {
            alert('Edit Item: ' + item.id);
        };
        $scope.share = function(item) {
            alert('Share Item: ' + item.id);
        };
    }
})();
