jobs.controller('login', function ($scope, $location, loginFactory) {
    $scope.user = {
        username: '',
        password: ''
    }

    $scope.login = function () {
        loginFactory.login($scope)
    }
})
