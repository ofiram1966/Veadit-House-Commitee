app.factory("messages", function($q, $http,user) {

     var messages = [];
    //  var wasEverLoaded = {};
    
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
    
        // messages = [];
        var getMessagesURL =  "https://my-json-server.typicode.com/ofiram1966/Veadit-House-Commitee/messages?communityId="+
       getCommunityNum()
        // user.getActiveUser().communityId;
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
    function getCommunityNum(){
        return messages.communityId ? 2 : 1;
    }
   
    function createMessage(communityId, creationTime, title, details, priority,imgUrl){
     var async = $q.defer();
     var newMessage = new Message({id:-1, communityId: communityId, creationTime: creationTime,
        title: title, details: details, priority:priority, imgUrl: imgUrl, 
        userId: user.getActiveUser().id});

        messages.push(newMessage);
        async.resolve(newMessage);


    }
// user Delete Message
   

    // function deleteMessage(message) {
    //     var async = $q.defer();
    //     var msgId = message.id;
    //     var messagesURL ="https://my-json-server.typicode.com/ofiram1966/Veadit-House-Commitee/messages/"+messageId
      
    //     $http.delete(messagesURL).then(function (response) {
    //         var i = findWithAttr(messages, "id", messageId);
    //         messageArr.splice(i, 1);
    //         async.resolve(messages);
    //     }, function (error) {
    //         async.reject(error);
    //     });
    //     return async.promise;
    // }
   


    // function findWithAttr(array, attr, value) {
    //     for (var i = 0; i < array.length; i += 1) {
    //         if (array[i][attr] === value) {
    //             return i;
    //         }
    //     }
    //     return -1;
    // }


    return {
        getActiveUserMessages : getActiveUserMessages,
        getCommunityNum: getCommunityNum,
        createMessage: createMessage
        // deleteMessage: deleteMessage,
        
        
    }
})


   

  

