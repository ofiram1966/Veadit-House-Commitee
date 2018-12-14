app.controller("messagesCtrl",function($scope,user, messages ){
    
    $scope.activeUser = user.getActiveUser(); 
messages.getActiveUserMessages().then(function (messages){
    $scope.messages = messages;

},function(error){

})



})

       