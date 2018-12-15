app.controller("messagesCtrl",function($scope,user, messages ){
    
    $scope.activeUser = user.getActiveUser(); 
messages.getActiveUserMessages().then(function (messages){
    $scope.messages = messages;

},function(error){

})
$scope.deleteMessage = function (message) {
    messages.deleteMessage(message).then(function () {}, function () {
        console.log("error");
    })
}
$scope.createMessage = function () {
    recipes.createMessage($scope.communityId, $scope.creationTime, 
        $scope.title, $scope.details, $scope.priority,  $scope.image).then(function () {
        $location.path("/messages")
    }, function (err) {
        console.log(err);
    })
}

})

