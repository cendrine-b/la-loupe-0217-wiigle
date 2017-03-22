angular.module('app')
    .controller('MainController', function($scope, omdbService) {
        /* Here is your main controller */

        $scope.query = "";
        $scope.goSearch = function() {

            // OMDB API
              omdbService.getOne($scope.query).then(function(response) {
                $scope.details = response.data;
              });

        };
    });
