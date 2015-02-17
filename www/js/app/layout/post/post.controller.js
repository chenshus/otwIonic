(function() {

    angular
        .module('app.post')
        .controller('Post', Post);

<<<<<<< HEAD
    function Post($rootScope,postModal){ //postService?

        var vm= this;

        vm.closeModal =function(){
            postModal.Modal.hide();
=======
    function Post(postService,$rootScope,postPopover){

        var vm= this;

        vm.closePopover =function(){
            postPopover.Popover.hide();

>>>>>>> 8ca236f789129bebcf49d8448f298e6cdd76c588
        };

        vm.createPost = function(newPost){

<<<<<<< HEAD
//            postService.PostNewFeed(newPost);
            $rootScope.$emit('newPost',newPost);
            vm.closeModal();
=======
            postService.PostNewFeed(newPost);
            $rootScope.$emit('newPost',newPost);
            vm.closePopover();
>>>>>>> 8ca236f789129bebcf49d8448f298e6cdd76c588
            newPost.description='';
        }
    }

})();

