jobs.factory('companiesFactory', function ($rootScope, $location, $q) {
    return {
        saveCompany: function (scope) {
            dpd.companies.post(scope.company, function (result, error) {})
        }
    }
})
