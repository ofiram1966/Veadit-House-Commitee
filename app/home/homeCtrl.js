
app.controller("homeCtrl", function($scope) {
  

    $scope.showPopover = function() {
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
     
      $scope.showPopover2 = function() {
        $scope.popoverIsVisible2 = true; 
      };
      
      $scope.hidePopover2 = function () {
        $scope.popoverIsVisible2 = false;
        
      };
      $scope.showPopover3 = function() {
        $scope.popoverIsVisible3 = true; 
      };
      
      $scope.hidePopover3 = function () {
        $scope.popoverIsVisible3 = false;
        
      };
      
  
});


 