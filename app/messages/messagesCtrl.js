app.controller("messagesCtrl",function($scope,user, messages ){
    
   
messages.getActiveUserMessages().then(function (messages){
    $scope.messages = messages;

},function(error){

})



});

       