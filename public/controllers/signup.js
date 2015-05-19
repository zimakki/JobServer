jobs.controller('signup', ['$scope,$location,signupFactory', function ($scope, $location, signupFactory) {
    $scope.user = {
        username: '',
        password: '',
        fullname: '',
        privilege: ''
    }

    $scope.save = function () {
        signupFactory.signup($scope)
    }
}])
