jobs.factory('singupFactory', function ($rootScope, $location) {
    return {
        login: function (scope) {
            dpd.users.login(scope.user, function (result, error) {

            })
        }
    }
})
