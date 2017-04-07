angular.module('app')
    .controller('NavbarController', function($scope, Auth, CurrentUser) {
        $scope.isCollapsed = true;
        $scope.auth = Auth;
        $scope.user = CurrentUser.user();

        if ($scope.user.email !== undefined) {
          $scope.user.email = $scope.user.email.replace(/@.*$/,"");
        }

        $scope.openNav = function () {
          document.getElementById("myNav").style.width = "100%";
        };

        $scope.closeNav = function () {
          document.getElementById("myNav").style.width = "0%";
        };

        $scope.logout = function() {
            Auth.logout();
        };
    });
