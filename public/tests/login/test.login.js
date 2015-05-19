describe('Login test fixture', function () {
    beforeEach(module('jobs'));

    var login, scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        login = $controller('login', {
            $scope: scope
        });
    }));

    it('login information must not be empty', function () {
        scope.user.username = 'user'
        scope.user.password = 'password'
        expect(scope.user).toEqual({
            username: 'user',
            password: 'password'
        });
    })
})
