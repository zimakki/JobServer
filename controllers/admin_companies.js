jobs.controller('admin_companies',function($scope,$location,companiesFactory){
    $scope.company={
        name:'',
        description:''
    };
    
    $scope.save = function(){
        companiesFactory.saveCompany($scope)
    }
});
