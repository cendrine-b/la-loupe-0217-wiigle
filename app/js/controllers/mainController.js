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
                console.log($scope.gif);
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
<<<<<<< HEAD
                $scope.bindHTML = $sce.trustAsHtml($scope.video.value[0].embedHtml);
=======
                $scope.bindHTML = $sce.trustAsHtml($scope.video.value[0].embedHtml.replace(/autoplay\=1/g,"autoplay=0"));
>>>>>>> 2330075a593a63a08a8f8f7f09710f45b192ed1d
            });

            // WEB API
            webService.getOne($scope.query).then(function(response) {
                $scope.web = response.data;
            });

            // color API
            colorService.getOne($scope.query).then(function(response) {
                $scope.color = response.data;
                console.log($scope.color[0].hex);
                console.log($scope.color[0]);
                console.log($scope.color[0].imageUrl);

            });


        };
    });
