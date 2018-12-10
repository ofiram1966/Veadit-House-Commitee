app.controller("messagesCtrl",function($scope, user, $location ){

    $scope.activeUser = user.getActiveUser();
});