angular.module('app')

    .controller('MainController', function($scope, $state, $stateParams, omdbService, gifService, imageService, spotifyService, videoService, $sce, webService, colorService, postSearchService, CurrentUser, $q) {
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

            $scope.spinner = true;
            $scope.resultatrecherche = false;
            var appelOmdb = omdbService.getOne($scope.query);
            var appelGiphy = gifService.getOne($scope.query);
            var appelImage = imageService.getOne($scope.query);
            var appelSpotify = spotifyService.getOne($scope.query);
            var appelVideo = videoService.getOne($scope.query);
            var appelWeb = webService.getOne($scope.query);
            var appelColor = colorService.getOne($scope.query);

            // OMDB API
            appelOmdb.then(function(response) {
                $scope.cineImage = true;
                $scope.hideMovie = false;
                $scope.details = response.data;
                if ($scope.details.Response === "False") {
                    $scope.hideMovie = true;
                    $scope.cineImage = false;
                }


            });

            // GIPHY API
            appelGiphy.then(function(res) {
                $scope.imgNotFound = true;
                $scope.imageGify = false;
                $scope.gif = res.data.data;
                if ($scope.gif.length === 0) {
                    $scope.imgNotFound = false;

                }
            });

            //image
            appelImage.then(function(response) {
                $scope.hideTxtImage = true;
                $scope.image = response.data;
                if ($scope.image.value.length === 0) {
                    $scope.hideTxtImage = false;
                }
                $scope.spinner = false;
                $scope.resultatrecherche = true;
            });

            // SPOTIFY API
            appelSpotify.then(function(response) {
                $scope.imgAudio = true;
                $scope.hideAudio = false;
                $scope.data = response.data;
                if ($scope.data.tracks.items.length === 0) {
                    $scope.imgAudio = false;
                    $scope.hideAudio = true;

                }

            });

            //video
            appelVideo.then(function(response) {
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
            appelWeb.then(function(response) {
                $scope.hideImgWeb = true;
                $scope.hideWeb = false;
                $scope.web = response.data;
                if ($scope.web.rankingResponse.mainline !== undefined) {

                } else {
                    $scope.hideWeb = true;
                    $scope.hideImgWeb = false;
                }


            });

            // color API
            appelColor.then(function(response) {
                $scope.color = response.data;
                $scope.imgColor = true;
                if ($scope.color.counts.matching_colors === "0") {
                    $scope.imgColor = false;
                    $scope.hideColor = true;
                }
            });

            $q.all({
                appelOmdb,
                appelGiphy,
                appelImage,
                appelSpotify,
                appelVideo,
                appelWeb,
                appelColor
            }).then(function(responses) {
                console.log('all done', responses);

                $scope.user = CurrentUser.user();
                console.log('user', $scope.user);
                if ($scope.user.email !== undefined) {
                    var results = {
                        omdb: $scope.details.Title,
                        giphy: $scope.gif[0].bitly_gif_url,
                        image: $scope.image.value[0].contentUrl,
                        spotify: $scope.data.tracks.items[0].preview_url,
                        video: $scope.bindHTML,
                        web: $scope.web.webPages.value[0].url,
                        color: $scope.color[0].hex
                    };
                    console.log(results);
                    console.log("coucou");

                    postSearchService.create($scope.query, $scope.user, results).then(function(res) {

                    }, function(err) {});
                }
            });
        };

        $scope.goSearch();

        $scope.nextSearch = function() {
            $state.go('anon.resultat', {
                query: $scope.query
            });
        };

    });
