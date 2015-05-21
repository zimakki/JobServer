jobs.controller('menu', function ($scope, $rootScope, $location, $q, signupFactory) {

    signupFactory.watchSession()
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
