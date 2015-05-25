jobs.controller('signup', function ($scope, signupFactory) {
    $scope.user = {
        username: '',
        password: '',
        fullname: '',
        privilege: 'User'
    }
    
    $scope.passwordRetype = ''

    $scope.save = function () {
        signupFactory.signup($scope)
    }
})
