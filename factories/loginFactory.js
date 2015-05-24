jobs.factory('loginFactory', function ($rootScope, $location, signupFactory,$q) {
    return {
        login: function (scope) {
            
            var defer = $q.defer()
            
            dpd.users.login(scope.user, function (result, error) {
                defer.promise.then(function(error){
                    if (error) {
                        $rootScope.loader = ""
                        $rootScope.showError = true;
                    } else {
                        //alert(JSON.stringify(result))
                    }
                    signupFactory.watchSession()
                })
                defer.resolve(error)
            })
        }
    }
})
