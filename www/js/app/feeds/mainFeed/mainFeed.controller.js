(function() {

    angular
        .module('app.mainFeed')
        .controller('MainFeed', MainFeed);

<<<<<<< HEAD
    function MainFeed($scope, $ionicPopover,Socket,$rootScope,postModal,checkInModal, $ionicModal) {
=======
    function MainFeed($scope, $ionicPopover,Socket,$rootScope,postPopover,checkInPopover) {
>>>>>>> 8ca236f789129bebcf49d8448f298e6cdd76c588

        $scope.navTitle = '<span> <i class="icon ion-social-rss">&nbsp; Feed</i></span>';

        $scope.footerTabs = [
            {"value":"Post","id":"post", "icon":"ion-android-textsms", "onClickOpen":"openModal($event)"},
            {"value":"Check-In","id":"checkIn", "icon":"ion-map", "onClickOpen":"openModal($event)"}
        ];

<<<<<<< HEAD
        var modals =[
            {name:'post', ModalService :postModal},
            {name:'checkIn', ModalService :checkInModal}
        ];
        modals.forEach(function(modal){
            modal.ModalService.InitializeModal($scope);
=======
        var popovers =[
            {name:'post',PopoverService :postPopover},
            {name:'checkIn',PopoverService :checkInPopover}
        ];
        popovers.forEach(function(popover){
            popover.PopoverService.InitializePopover($scope);
>>>>>>> 8ca236f789129bebcf49d8448f298e6cdd76c588
        });


        $scope.openModal = function($event) {
            var id = $event.currentTarget.id;
<<<<<<< HEAD
            modals.forEach(function (modal) {
                if(modal.name==id){
                    modal.ModalService.Modal.show($event);
=======
            popovers.forEach(function (popover) {
                if(popover.name==id){
                    popover.PopoverService.Popover.show($event);
>>>>>>> 8ca236f789129bebcf49d8448f298e6cdd76c588
                }
            });
        };

        //Cleanup the popover when we're done with it!
        $scope.$on('$destroy', function() {
<<<<<<< HEAD
            modals.forEach(function (popover) {
                modal.ModalService.Modal.remove();
=======
            popovers.forEach(function (popover) {
                popover.PopoverService.Popover.remove();
>>>>>>> 8ca236f789129bebcf49d8448f298e6cdd76c588
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
