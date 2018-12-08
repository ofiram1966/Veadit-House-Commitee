app.controller("loginCtrl", function($scope,$location,user) {
 $scope.invalidLogin = false;
    $scope.login=function(){
        $scope.invalidLogin = false;

        if($scope.email==="ofir@ofir.com"&& $scope.pwd==="1234" ){
            //success login
            $location.path("/dashboard")
        }else{
            //failed
            $scope.invalidLogin = true;
        }
    }

    // $scope.invalidLogin = false;

    // $scope.login = function() {
    //     $scope.invalidLogin = false;

    //     user.login($scope.email, $scope.pwd).then(function() {
    //         // success login
    //         $location.path("/dashboard")
    //     }, function(error) {
    //         // failed login
    //         $scope.invalidLogin = true;
    //     })
    // }
});

