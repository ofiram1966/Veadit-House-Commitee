app.controller("dashboardCtrl",function($scope, user, $location ){
     // Checking if the user is currently logged in,
    // if not redirecting to the home page
    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }
    
   $scope.activeUser = user.getActiveUser();
    // $scope.isAdmin = user.isAdmin();
});