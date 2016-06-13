angular.module('adamShaleen').controller('navController', function($scope, service) {

// Toggle mobile navbar icon from burger to x and back
$scope.burgerChangeToX = !false;
$scope.toggleBurger = function() {
    $scope.burgerChangeToX = !$scope.burgerChangeToX;
};

// Mobile navbar dropdown content shows on click
$scope.mobileNavMenu = function() {
    document.getElementById('.nav_dropdown_mobile').classList.toggle('show');
};




});  // closing controller tag.
