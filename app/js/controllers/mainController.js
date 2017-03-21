angular.module('app')
    .controller('MainController', function($scope, /*$http*/ omdbService) {
        /* Here is your main controller */

        $scope.query = "";
        $scope.goSearch = function() {

            // OMDB API
              omdbService.getOne().then(function(response) {
                $scope.details = response.data;
              });



            // $http.get("http://www.omdbapi.com/?t=" + $scope.query + "&tomatoes=true&plot=full")
            //     .then(function(response) {
            //     $scope.details = response.data;
            // });
        };
    });
