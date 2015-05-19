describe('Signup test fixture', function () {
    beforeEach(module('jobs'));

    var login, scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        login = $controller('signup', {
            $scope: scope
        });
    }));

    it('should not be empty', function () {
        scope.user = {
            username: '',
            password: '',
            fullname: '',
            privilege: ''
        }
        expect(scope.user).toEqual({
            username: '',
            password: '',
            fullname: '',
            privilege: ''
        });
    })
})
