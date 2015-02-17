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
<<<<<<< HEAD
            vm.items.splice(0, 0, newpost.description);
=======
            vm.items.push(newpost.description);
>>>>>>> 8ca236f789129bebcf49d8448f298e6cdd76c588
        });

        Socket.on('newFeed',function (data){
            vm.items.push(data.description);

        });
<<<<<<< HEAD
=======

>>>>>>> 8ca236f789129bebcf49d8448f298e6cdd76c588

        // TODO: change functions!
        vm.edit = function(item) {
            alert('Edit Item: ' + item.id);
        };
        vm.share = function(item) {
            alert('Share Item: ' + item.id);
        };

    }
})();