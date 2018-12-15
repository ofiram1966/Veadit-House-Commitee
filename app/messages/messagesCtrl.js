app.controller("messagesCtrl",function($scope,user, messages,$location ){
    // Checking if the user is currently logged in,
    // if not redirecting to the home page
    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }
    $scope.activeUser = user.getActiveUser(); 
messages.getActiveUserMessages().then(function (messages){
    $scope.messages = messages;

},function(error){

})
$scope.deleteMessage = function (message) {
    messages.deleteMessage(message).then(function () {
        
    }, function () {
        console.log("error");
    })
}
$scope.createMessage = function () {
    messges.createMessage($scope.communityId, $scope.creationTime, 
        $scope.title, $scope.details, $scope.priority,  $scope.image).then(function () {
        $location.path("/messages")
    }, function (err) {
        console.log(err);
    })
}

})

