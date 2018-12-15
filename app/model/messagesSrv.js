app.factory("messages", function($q, $http,user) {

     var messages = [];
    
    function Message(plainMessage) {
        this.id = plainMessage.id;
        this.userId = plainMessage.userId;
        this.communityId = plainMessage.communityId;
        this.creationTime = plainMessage.creationTime;
        this.title = plainMessage.title;
        this.details = plainMessage.details;
        this.priority = plainMessage.priority;
        this.imgUrl = plainMessage.imgUrl;
       
    }

    function getActiveUserMessages(){
        var async = $q.defer();
    
        messages = [];
        var getMessagesURL =  "https://my-json-server.typicode.com/ofiram1966/Veadit-House-Commitee/messages?communityId="+
        
        user.getActiveUser().id ;
       

       
        $http.get(getMessagesURL).then(function (response) {
            for (var i=0; i < response.data.length; i++){
                var message = new Message(response.data[i]);
                messages.push(message);
            }
            async.resolve(messages);

        }, function (error) {
            async.reject(error);
                   
        })

         return async.promise;
    }
    return {
        getActiveUserMessages : getActiveUserMessages
        
    }
})


   

  

