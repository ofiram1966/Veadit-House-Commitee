app.factory("messageapp", function($q, $http) {
//     var messages = [];
//     // var wasEverLoaded = false;
//     function Message(plainMessage) {
//         this.id = plainMessage.id;
//         this.userId = plainMessage.userId;
//         this.communityId = plainMessage.communityId;
//         this.creationTime = plainMessage.creationTime;
//         this.title = plainMessage.title;
//         this.details = plainMessage.details;
//         this.priority = plainMessage.priority;
//         this.comments = plainMessage.comments;
//     }

//     function getUserMessageArr() {
//         messageArr = [];
//         var async = $q.defer();

//         var loginURL =  "https://my-json-server.typicode.com/ofiram1966/Veadit-House-Commitee/messages?communityId=" + activeUser.communityId.toString();
//         $http.get(loginURL).then(function (response) {

//             if (response.data.length > 0) {
//                 for (var i = 0; i < response.data.length; i++) {
//                     var msg = new Message(response.data[i]);
//                     messageArr.push(msg);
//                 }
//                 async.resolve(messageArr);
//             } else {
//                 async.reject("invalid credentials");
//             }
//         }, function (err) {
//             async.reject(err);
//         });

//         return async.promise;
//     }
//     return {
//         login: login,
//         logout: logout,
//         getAllMessages: getAllMessages,
//         getMemberMessageArr: getMemberMessageArr,
        
        
//     }
// });




