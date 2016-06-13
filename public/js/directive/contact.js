angular.module('adamShaleen').directive('contact', function() {
    return {
        restrict: 'EA',
        templateUrl: './html/contact.html',
        controller: 'contactController'
    };
});
