jobs.controller('menu', function ($scope, $rootScope, $location) {

    dpd.users.me(function (result, error) {
        if (result) {
            switch (result.privilege) {
            case 'Admin':
                $rootScope.showMainMenu = false;
                $rootScope.showAdminMenu = true;
                break
            }
        } else {
            $rootScope.showMainMenu = true;
            $rootScope.showAdminMenu = false;
        }
    });




    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    $scope.logout = function () {
        dpd.users.logout(function (result, error) {
            $rootScope.showMainMenu = true;
            $rootScope.showAdminMenu = false;
        });
    };
});
