jobs.controller('menu', function ($scope, $rootScope, $location) {

    $rootScope.showMainMenu = true;


    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    $scope.logout = function () {
        $rootScope.showMainMenu = true;
        $location.path('/');
    };
});
