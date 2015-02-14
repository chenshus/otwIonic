(function() {

    angular
        .module('app.mainFeedItems')
        .controller('MainFeedItems', MainFeedItems);

    function MainFeedItems($rootScope,Socket) {

        var vm = this;
        // TODO: neeede to be changed - fetch from DB
        vm.items = [
        ];


        $rootScope.$on('newPost',function(e,newpost){
            vm.items.push(newpost.description);
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