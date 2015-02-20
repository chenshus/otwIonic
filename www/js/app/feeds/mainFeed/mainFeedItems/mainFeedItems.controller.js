(function() {

    angular
        .module('app.mainFeedItems')
        .controller('MainFeedItems', MainFeedItems);

    function MainFeedItems($rootScope,Socket) {

        var vm = this;
        // TODO: needed to be changed - fetch from DB
        vm.items = [
        ];


        $rootScope.$on('newCheckIn', function(e, newCheckIn){
            vm.items.splice(0, 0, newCheckIn.description);
        });

        $rootScope.$on('newPost',function(e,newPost){
            vm.items.splice(0, 0, newPost.description);
        });

        Socket.on('newFeed',function (data){
            vm.items.push(data.description);

        });

        // TODO: change functions!
        vm.edit = function(item) {
            alert('Edit Item: ' + item.id);
        };
        vm.share = function(item) {
            alert('Share Item: ' + item.id);
        };

    }
})();