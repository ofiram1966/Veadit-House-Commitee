
app.controller("homeCtrl", function($scope) {

    $scope.showPopover = function(section) {
        $scope.popoverIsVisible = true; 
        
      };
      
      $scope.hidePopover = function () {
        $scope.popoverIsVisible = false;
        
      };
      $scope.showPopover1 = function() {
        $scope.popoverIsVisible1 = true; 
        
      };
      
      $scope.hidePopover1 = function () {
        $scope.popoverIsVisible1 = false;
        
      };
      
  
});


 