app.controller("dashboardCtrl",function($scope, user, $location ){
   $scope.activeUser = user.getActiveUser();
    // $scope.isAdmin = user.isAdmin();
});