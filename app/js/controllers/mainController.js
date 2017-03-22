angular.module('app')
    .controller('MainController', function($scope, $http, omdbService, imageService) {
        /* Here is your main controller */

        $scope.query = "";
        $scope.goSearch = function() {

            // OMDB API
              omdbService.getOne($scope.query).then(function(response) {
                $scope.details = response.data;
              });

                //image
                           imageService.getOne($scope.query).then(function(response) {
                               $scope.image = response.data;
                             console.log($scope.image.value[0].contentUrl);
                           });




        };
    });
