jobs.factory('companiesFactory', function ($rootScope, $location, $q) {
    return {
        saveCompany: function (scope) {
            dpd.companies.post(scope.company, function (result, error) {
                scope.companies.push(result)
                scope.company = {}
            })
        },

        getCompanies: function (scope) {
            dpd.companies.get({}, function (result, error) {
                scope.companies = result;
            })
        }
    }
})
