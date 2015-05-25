jobs.factory('signupFactory', function ($rootScope, $q,$location) {
    return {
        signup: function (sope) {
            var defer = $q.defer()
            
            dpd.users.post(scope.user, function (result, err) {
                defer.promise.then(function(err){
                    if (err) {
                        scope.loader = ''
                        $scope.showError = true;
                    } else {
                    }
                })
                defer.resolve(err)
            });
        },

        watchSession: function () {
            var defer = $q.defer()

            dpd.users.me(function (result, error) {

                defer.promise.then(function (result) {
                    $rootScope.fullname = result.fullname;
                    if (result) {
                        switch (result.privilege) {
                        case 'Admin':
                            $rootScope.showMainMenu = false;
                            $rootScope.showAdminMenu = true;
                            $location.path('/admin_companies')
                            break
                        }
                    } else {
                        $rootScope.showMainMenu = true;
                        $rootScope.showAdminMenu = false;
                        $location.path('/login')
                    }
                })
                defer.resolve(result)

            });
        }
    }
})
