jobs.factory('signupFactory', function ($rootScope) {
    return {
        signup: function (sope) {
            dpd.users.post(scope.user, function (result, err) {
                if (err) {

                } else {

                }
            });
        }
    }
})
