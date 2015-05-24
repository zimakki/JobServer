jobs.controller('login', function ($scope, $rootScope, $location, loginFactory) {
    
    
    $rootScope.loader = ""
    
    $scope.user = {
        username: '',
        password: ''
    }

    $scope.login = function () {
        $rootScope.loader = 'loading'
        loginFactory.login($scope)
    }
})
