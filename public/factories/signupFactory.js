jobs.factory('signupFactory', function ($rootScope, $q) {
    return {
        signup: function (sope) {
            dpd.users.post(scope.user, function (result, err) {
                if (err) {

                } else {

                }
            });
        },

        watchSession: function () {
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
        }
    }
})
