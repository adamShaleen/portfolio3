angular.module('adamShaleen').controller('navController', function($scope, service) {

$scope.burgerChangeToX = !false;
$scope.toggleBurger = function() {
    $scope.burgerChangeToX = !$scope.burgerChangeToX;
};

});  // closing controller tag.
