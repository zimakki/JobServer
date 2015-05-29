var jobs = angular.module('jobs', ['ngRoute']);
jobs.config(function ($routeProvider) {
    $routeProvider.when('/login', {
        controller: 'login',
        templateUrl: 'views/login.html'
    }).when('/signup', {
        controller: 'signup',
        templateUrl: 'views/signup.html'
    }).when('/admin_companies', {
        controller: 'admin_companies',
        templateUrl: 'views/admin_companies.html'
    }).when('/job',{
        controller:'job',
        templateUrl:'views/job.html'
    })
})
