angular.module('app')

    .controller('MainController', function($scope, $stateParams, omdbService, gifService, imageService, spotifyService, videoService, $sce, webService, colorService) {
        /* Here is your main controller */



        $scope.query = $stateParams.query;

        $scope.hideImgWeb = true;
        $scope.hideAudio = true;
        $scope.hideWeb = true;
        $scope.imageGify = true;
        $scope.hideTxtImage=true;
        $scope.imgNotFound = true;
        $scope.hideWeb=true;
        $scope.hideMovie = true;
        $scope.query = "";
        $scope.cineImage = true;
        $scope.imgAudio = true;
        $scope.hideVideo = true;
        $scope.imgVideo = true;


  $scope.goSearch = function() {




            // OMDB API
            omdbService.getOne($scope.query).then(function(response) {
              $scope.hideMovie = false;
                $scope.details = response.data;
                if ($scope.details.Response == "False"){
                    $scope.hideMovie = true;
                    $scope.cineImage = false;
                }

            });

            // GIPHY API
            gifService.getOne($scope.query).then(function(res) {
                $scope.gif = res.data.data;
                if ($scope.gif.length===0) {
                  $scope.imgNotFound = false;

                }
            });

            //image
            imageService.getOne($scope.query).then(function(response) {
                $scope.image = response.data;
                if ($scope.image.value.length === 0) {
                  $scope.hideTxtImage=false;
                }
            });

            // SPOTIFY API
            spotifyService.getOne($scope.query).then(function(response) {
              $scope.hideAudio = false;
                $scope.data = response.data;
                if ($scope.data.tracks.items.length === 0){
                    $scope.imgAudio = false;
                    $scope.hideAudio = true;

                }
            });

            //video
            videoService.getOne($scope.query).then(function(response) {
                $scope.video = response.data;
                console.log($scope.video);
                $scope.bindHTML = $sce.trustAsHtml($scope.video.value[0].embedHtml.replace(/autoplay|autoPlay\=1/g,"autoplay=0"));
                $scope.hideVideo = false;





            });

            // WEB API
            webService.getOne($scope.query).then(function(response) {
              $scope.hideWeb = false;
              $scope.web = response.data;
              if ($scope.web.rankingResponse.mainline !== undefined) {
              } else {
                $scope.hideWeb = true;
                $scope.hideImgWeb = false;
              }


            });

            // color API
            colorService.getOne($scope.query).then(function(response) {
                $scope.color = response.data;
            });


        };
    });
