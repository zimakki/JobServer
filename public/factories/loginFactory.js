jobs.factory('loginFactory', function ($rootScope, $location) {
    return {
        login: function (scope) {

            dpd.users.login(scope.user, function (result, error) {
                if (error) {
                    alert(JSON.stringify(error))
                } else {
                    alert(JSON.stringify(result))
                }
            })
        }
    }
})
