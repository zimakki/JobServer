jobs.controller('menu', function ($scope, $rootScope, $location) {

    dpd.users.me(function (result, error) {
        if (result) {
            alert(JSON.stringify(result))
            switch (result.privilege) {
            case 'Admin':
                $rootScope.showMainMenu = false;
                $rootScope.showAdminMenu = true;
                break

            default:
                $rootScope.showMainMenu = true;
                $rootScope.showAdminMenu = false;
                break
            }
        }
    });




    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    $scope.logout = function () {
        $rootScope.showMainMenu = true;
        $location.path('/');
    };
});
