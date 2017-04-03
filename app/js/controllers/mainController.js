angular.module('app')

    .controller('MainController', function($scope, $stateParams, omdbService, gifService, imageService, spotifyService, videoService, $sce, webService, colorService, postSearchService) {
        /* Here is your main controller */

        $scope.query = "";
        $scope.query = $stateParams.query;

        $scope.cineImage = true;
        $scope.imgNotFound = true;
        $scope.hideTxtImage = true;
        $scope.imgAudio = true;
        $scope.imgVideo = true;
        $scope.hideImgWeb = true;
        $scope.imgColor = true;

        $scope.hideAudio = true;
        $scope.hideWeb = true;
        $scope.imageGify = true;
        $scope.hideWeb = true;
        $scope.hideMovie = true;
        $scope.hideVideo = true;
        $scope.imgVideo = true;

        $scope.goSearch = function() {

            //good

            // OMDB API
            omdbService.getOne($scope.query).then(function(response) {
                $scope.cineImage = true;
                $scope.hideMovie = false;
                $scope.details = response.data;
                if ($scope.details.Response == "False") {
                    $scope.hideMovie = true;
                    $scope.cineImage = false;
                }

            });

            // GIPHY API
            gifService.getOne($scope.query).then(function(res) {
                $scope.imgNotFound = true;
                $scope.imageGify = false;
                $scope.gif = res.data.data;
                if ($scope.gif.length === 0) {
                    $scope.imgNotFound = false;

                }
            });

            //image
            imageService.getOne($scope.query).then(function(response) {
                $scope.hideTxtImage = true;
                $scope.image = response.data;
                if ($scope.image.value.length === 0) {
                    $scope.hideTxtImage = false;
                }
            });

            // SPOTIFY API
            spotifyService.getOne($scope.query).then(function(response) {
                $scope.imgAudio = true;
                $scope.hideAudio = false;
                $scope.data = response.data;
                if ($scope.data.tracks.items.length === 0) {
                    $scope.imgAudio = false;
                    $scope.hideAudio = true;

                }
            });

            //video
            videoService.getOne($scope.query).then(function(response) {

                $scope.video = response.data;
                if ($scope.video.value.length > 0) {
                    $scope.bindHTML = $sce.trustAsHtml($scope.video.value[0].embedHtml.replace(/autoplay|autoPlay\=1/g, "autoplay=0"));
                    $scope.hideVideo = false;
                    $scope.imgVideo = true;
                } else {
                    $scope.hideVideo = true;
                    $scope.imgVideo = false;
                }

            });

            // WEB API
            webService.getOne($scope.query).then(function(response) {
                $scope.hideImgWeb = true;
                $scope.hideWeb = false;
                $scope.web = response.data;
                if ($scope.web.rankingResponse.mainline !== undefined) {} else {
                    $scope.hideWeb = true;
                    $scope.hideImgWeb = false;
                }

            });

            // color API
            colorService.getOne($scope.query).then(function(response) {
                $scope.color = response.data;
                $scope.imgColor = true;
                if ($scope.color.counts.matching_colors === "0") {
                    $scope.imgColor = false;
                    $scope.hideColor = true;
                }
            });

            // $scope.user = CurrentUser.user();
            // if ($scope.user === true) {
              // console.log("logok");
              //   postSearchService.create($scope.query).then(function(res) {
              //       console.log("ok");
              //   }, function(err) {
              //       console.log("erreur data base");
              //   });

            // }


                postSearchService.create($scope.query).then(function(res) {
                    console.log("ok");
                }, function(err) {
                    console.log("erreur data base");
                });

        };
        $scope.goSearch();
    });
