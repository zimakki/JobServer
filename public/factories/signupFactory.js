jobs.factory('signupFactory', function ($rootScope) {
    return {
        signup: function (scope) {
            dpd.restaurants.post($scope.restaurant, function (result, err) {
                if (err) {

                } else {

                }
            });
        }
    }
})
