jobs.controller('signup', function ($scope, signupFactory) {
    $scope.user = {
        username: '',
        password: '',
        fullname: '',
        privilege: 'User'
    }
    
    $scope.showError = false;
    
    $scope.passwordRetype = ''
    $scope.loader = ''

    $scope.save = function () {
        $scope.loader = 'loading'
        signupFactory.signup($scope)
    }
})
