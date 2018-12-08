app.controller("navbarCtrl",function($scope ){

  $scope.isUserLoggedIn=function(){
      return false;
  }
//   $scope.isUserLoggedIn = function () {
//     return user.isLoggedIn();
// }
//  $scope.isUserAdmin = function () {
//     return user.isAdmin();
// }
//  $scope.logout = function () {
//     user.logout();
//     $location.path("/");
// }

})