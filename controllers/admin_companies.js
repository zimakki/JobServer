jobs.controller('admin_companies',function($scope,$location,companiesFactory){
    $scope.company={
        name:'',
        description:''
    };
    
    $scope.companies = []
    
    companiesFactory.getCompanies($scope)
    
    $scope.save = function(){
        companiesFactory.saveCompany($scope)
    }
});
