angular.module('app')
    .controller('MainController', function($scope, omdbService, gifService, imageService, spotifyService, videoService, $sce, webService, colorService) {
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

            //image
            imageService.getOne($scope.query).then(function(response) {
                $scope.image = response.data;
            });

            // SPOTIFY API
            spotifyService.getOne($scope.query).then(function(response) {
                $scope.data = response.data;
            });

            //video
            videoService.getOne($scope.query).then(function(response) {
                $scope.video = response.data;


                $scope.bindHTML = $sce.trustAsHtml($scope.video.value[0].embedHtml.replace(/autoplay|autoPlay\=1/g,"autoplay=0"));

                console.log($scope.video);

            });

            // WEB API
            webService.getOne($scope.query).then(function(response) {
                $scope.web = response.data;
            });

            // color API
            colorService.getOne($scope.query).then(function(response) {
                $scope.color = response.data;
                console.log($scope.color);
            });


        };
    });
