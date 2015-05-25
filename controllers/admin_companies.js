jobs.controller('admin_companies',function($scope,$location,$rootScope,companiesFactory){
    $scope.company={
        name:'',
        description:''
    };

    if (!$rootScope.companies){
        companiesFactory.getCompanies($scope)
    }
    
    $scope.addJob = function(index){
        $rootScope.index = index; 
        $location.path('/job')
    }

    $scope.save = function(){
        companiesFactory.saveCompany($scope)
    }
});
