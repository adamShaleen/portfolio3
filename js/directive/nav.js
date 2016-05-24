angular.module('adamShaleen').directive('navBar', function() {

    return {
        restrict: 'EA',
        templateUrl: './html/nav.html',
        controller: 'navController'
    };

});  // closing tag
