describe('Signup test fixture', function () {
    beforeEach(module('jobs'));

    var scope, signupFactory;

    beforeEach(function () {
        signupFactoryMock = {
            signup: function () {}
        }
    })

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        login = $controller('signup', {
            $scope: scope,
            signupFactory: signupFactoryMock
        });
    }));

    it('should not be empty', function () {
        scope.user = {
            username: 'username',
            password: 'password',
            fullname: 'fullname',
            privilege: 'privilege'
        }
        expect(scope.user).toEqual({
            username: 'username',
            password: 'password',
            fullname: 'fullname',
            privilege: 'privilege'
        });
    })
})
