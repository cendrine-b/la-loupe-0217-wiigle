angular.module('app')
    .controller('MainController', function($scope, omdbService, gifService) {
        /* Here is your main controller */

        $scope.query = "";
        $scope.goSearch = function() {

            // OMDB API
              omdbService.getOne($scope.query).then(function(response) {
                $scope.details = response.data;
              });
            
            // GIPHY API
               gifService.getOne($scope.query).then(function(res) {
                $scope.gif = res.data.data;
            });
          
        };
    });
