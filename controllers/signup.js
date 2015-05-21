jobs.controller('signup', function ($scope, signupFactory) {
    $scope.user = {
        username: '',
        password: '',
        fullname: '',
        privilege: ''
    }

    $scope.save = function () {
        signupFactory.signup($scope)
    }
})
