angular.module('adamShaleen', ['ui.router', 'ngAnimate'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: './html/home.html',
            controller: 'homeController',
        })

        .state('about', {
            url: '/about',
            templateUrl: './html/about.html',
            controller: 'aboutController'
        })

        .state('skills', {
            url: '/skills',
            templateUrl: './html/skills.html',
            controller: 'skillsController'
        })

        .state('work', {
            url: '/work',
            templateUrl: './html/work.html',
            controller: 'workController'
        })

        .state('fun', {
            url: '/fun',
            templateUrl: './html/fun.html',
            controller: 'funController'
        });

        $urlRouterProvider
            .otherwise('/home');

});  // closing app tag
