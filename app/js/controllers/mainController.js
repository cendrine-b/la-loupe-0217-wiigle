angular.module('app')
    .controller('MainController', function($scope, gifService) {
        $scope.query = "";
        $scope.goSearch = function() {
            gifService.getOne($scope.query).then(function(res) {
                $scope.gif = res.data.data;
            });
        };
    });
