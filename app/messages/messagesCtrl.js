app.controller("messagesCtrl",function($scope, user, $location ){
    $scope.activeUser = user.getActiveUser();


    $scope.messages=[{

        id: 1,
        memberId: 1,
        communityId:1,
        creationTime: "2018-11-03T12:34:44.110Z",
        title: "1st message",
        details: "Message details...blabla..blabla...",
        priority: "High",
        imgUrl:"assets/images/"
       

    }

    ]

    // if (!user.isLoggedIn()) {
    //     $location.path("/");
    //     return;
    // }
    // message.getActiveUserMessages().then(function (messages) {
    //     $scope.messages = messages;
    // }, function(error) {
        
    // })


});

       