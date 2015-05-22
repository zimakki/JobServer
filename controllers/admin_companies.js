jobs.controller('admin_companies',function($scope,$location,companiesFactory){
    $scope.company={
        name:'',
        description:''
    };
    
    $scope.companies = []
    
    $scope.save = function(){
        companiesFactory.saveCompany($scope)
    }
});
