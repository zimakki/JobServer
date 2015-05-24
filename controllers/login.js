jobs.controller('login', function ($scope, $rootScope, $location, loginFactory) {
    
    
    $rootScope.loader = ""
    $rootScope.showError = false;
    
    $scope.user = {
        username: '',
        password: ''
    }

    $scope.login = function () {
        $rootScope.loader = 'loading'
        loginFactory.login($scope)
    }
})
