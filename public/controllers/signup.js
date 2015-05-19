jobs.controller('signup', function ($scope, $location, signupFactory) {
    $scope.user = {
        username: '',
        password: '',
        fullname: '',
        privilege: ''
    }

    $scope.save = funtion() {
        signupFactory.signup($scope)
    }
})
