jobs.factory('companiesFactory', function ($rootScope, $location, $q) {
    return {
        saveCompany: function (scope) {
            var defer = $q.defer();

            dpd.companies.post(scope.company, function (result, error) {

                defer.promise.then(function(result){
                    $rootScope.companies.push(result);
                    scope.company.name = '';
                    scope.company.description='';
                });
                defer.resolve(result);
            });
        },

        getCompanies: function (scope) {
            var defer = $q.defer();
            $rootScope.companies = [];
            dpd.companies.get({}, function (result, error) {

                defer.promise.then(function(result){
                    //alert(JSON.stringify(result))
                    $rootScope.companies = result;
                });
                defer.resolve(result);

            });
        }
    };
});
