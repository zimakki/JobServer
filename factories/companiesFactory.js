jobs.factory('companiesFactory', function ($rootScope, $location, $q) {
    return {
        saveCompany: function (scope) {
            var defer = $q.defer()
            
            dpd.companies.post(scope.company, function (result, error) {
                
                defer.promise.then(function(result){
                    scope.companies.push(result)
                    scope.company.name = ''
                    scope.company.description=''
                })
                defer.resolve(result)
            })
        },

        getCompanies: function (scope) {
            dpd.companies.get({}, function (result, error) {
                scope.companies = result;
            })
        }
    }
})
