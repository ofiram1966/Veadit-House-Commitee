
app.controller("homeCtrl", function($scope) {

    $scope.showPopover = function() {
        $scope.popoverIsVisible = true; 
        delay: {show:500; hide:100}
      };
      
      $scope.hidePopover = function () {
        $scope.popoverIsVisible = false;
        
      };
  
});