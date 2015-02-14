(function() {

    angular
        .module('app.post')
        .controller('Post', Post);

    function Post(postService,$rootScope,postPopover){

        var vm= this;

        vm.closePopover =function(){
            postPopover.Popover.hide();

        };

        vm.createPost = function(newPost){

            postService.PostNewFeed(newPost);
            $rootScope.$emit('newPost',newPost);
            vm.closePopover();
            newPost.description='';
        }
    }

})();

