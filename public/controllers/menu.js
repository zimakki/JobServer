jobs.controller('menu', function ($scope, $rootScope, $location, $q) {

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
        var defer = $q.defer()
        dpd.users.logout(function (result, error) {
            defer.promise.then(function () {
                $rootScope.showMainMenu = true;
                $rootScope.showAdminMenu = false;
            })
            defer.resolve()
        });
    };
});
