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
            var callOmdb = omdbService.getOne($scope.query);
            var callGiphy = gifService.getOne($scope.query);
            var callImage = imageService.getOne($scope.query);
            var callSpotify = spotifyService.getOne($scope.query);
            var callVideo = videoService.getOne($scope.query);
            var callWeb = webService.getOne($scope.query);
            var callColor = colorService.getOne($scope.query);

            // OMDB API
            callOmdb.then(function(response) {
                $scope.cineImage = true;
                $scope.hideMovie = false;
                $scope.details = response.data;
                if ($scope.details.Response === "False") {
                    $scope.hideMovie = true;
                    $scope.cineImage = false;
                }


            });

            // GIPHY API
            callGiphy.then(function(res) {
                $scope.imgNotFound = true;
                $scope.imageGify = false;
                $scope.gif = res.data.data;
                if ($scope.gif.length === 0) {
                    $scope.imgNotFound = false;

                }
            });

            //image
            callImage.then(function(response) {
                $scope.hideTxtImage = true;
                $scope.image = response.data;
                if ($scope.image.value.length === 0) {
                    $scope.hideTxtImage = false;
                }
                $scope.spinner = false;
                $scope.resultatrecherche = true;
            });

            // SPOTIFY API
            callSpotify.then(function(response) {
                $scope.imgAudio = true;
                $scope.hideAudio = false;
                $scope.data = response.data;
                if ($scope.data.tracks.items.length === 0) {
                    $scope.imgAudio = false;
                    $scope.hideAudio = true;

                }

            });

            //video
            callVideo.then(function(response) {
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
            callWeb.then(function(response) {
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
            callColor.then(function(response) {
                $scope.color = response.data;
                $scope.imgColor = true;
                if ($scope.color.counts.matching_colors === "0") {
                    $scope.imgColor = false;
                    $scope.hideColor = true;
                }
            });

            $q.all({
                callOmdb,
                callGiphy,
                callImage,
                callSpotify,
                callVideo,
                callWeb,
                callColor
            }).then(function(responses) {
                console.log('all done', responses);

                $scope.user = CurrentUser.user();
                console.log('user', $scope.user);
                if ($scope.user.email !== undefined) {
                  console.log("log in ok");
                  var results = {
                        omdb: $scope.details.Poster,
                        omdbTitle: $scope.details.Title,
                        omdbLink: $scope.details.imdbID,
                        giphy: $scope.gif[0].images.downsized.url,
                        image: $scope.image.value[0].contentUrl,
                        spotify: $scope.data.tracks.items[0].preview_url,
                        spotifyAlbum: $scope.data.tracks.items[0].album.images[1].url,
                        video: $scope.video.value[0].contentUrl,
                        videoImage: $scope.video.value[0].thumbnailUrl,
                        web: $scope.web.webPages.value[0].url,
                        webName: $scope.web.webPages.value[0].name,
                        color: $scope.color.colors[0].hex
                    };
                    console.log(results);


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
