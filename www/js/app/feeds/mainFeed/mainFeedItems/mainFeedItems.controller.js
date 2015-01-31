(function() {

    angular
        .module('app.mainFeedItems')
        .controller('MainFeedItems', MainFeedItems);

    function MainFeedItems($scope) {

        // TODO: neeede to be changed - fetch from DB
            $scope.items = [
                { id: 46 },
                { id: 47 },
                { id: 48 },
                { id: 49 },
                { id: 50 }
            ];

        // TODO: change functions!
            $scope.edit = function(item) {
                alert('Edit Item: ' + item.id);
            };
            $scope.share = function(item) {
                alert('Share Item: ' + item.id);
            };

    }
})();