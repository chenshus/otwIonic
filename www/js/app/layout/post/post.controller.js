(function() {

    angular
        .module('app.mainFeed.post')
        .controller('Post', Post);

    function Post($scope, $state) {
        $scope.createPost = function(newPost){
            alert(newPost.description);
        }
    }

})();

