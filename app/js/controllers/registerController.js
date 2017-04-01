angular.module('app')
    .controller('RegisterController', function($scope, $state, Auth) {
        $scope.register = function() {
            Auth.register($scope.user.register).then(function() {
                $state.go('anon.home');
            });
        };
    });
