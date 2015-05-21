jobs.controller('menu', function ($scope, $rootScope, $location) {


    switch ($rootScope.user.privilege) {
    case 'Admin':
        $rootScope.showMainMenu = false;
        $rootScope.showAdminMenu = true;
        break

    case '':
        $rootScope.showMainMenu = true;
        $rootScope.showAdminMenu = false;
        break
    }


    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    $scope.logout = function () {
        $rootScope.showMainMenu = true;
        $location.path('/');
    };
});
