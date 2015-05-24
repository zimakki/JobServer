jobs.factory('loginFactory', function ($rootScope, $location, signupFactory) {
    return {
        login: function (scope) {

            dpd.users.login(scope.user, function (result, error) {
                if (error) {
                    $rootScope.loader = ""
                } else {
                    //alert(JSON.stringify(result))
                }
                signupFactory.watchSession()

            })
        }
    }
})
