var jobs = angular.module('jobs', ['ngRoute']);
jobs.config(function ($routeProvider) {
    $routeProvider.when('/login', {
        controller: 'login',
        templateUrl: 'views/login.html'
    }).when('/signup', {
        controller: 'signup',
        templateUrl: 'views/signup.html'
    }).when('/companies', {
        controller: 'companies',
        templateUrl: 'views/companies.html'
    })
})
