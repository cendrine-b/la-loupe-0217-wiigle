angular.module('app')



    .service('videoService', function($http) {
        return {
            getOne: function(query) {
                var reqvideo = {
                    method: 'GET',
                    url: "https://api.cognitive.microsoft.com/bing/v5.0/videos/search?q=" + query + "&count=10&offset=0&safeSearch=Moderate",
                    headers: {
                        'Ocp-Apim-Subscription-Key': 'd401bbdf06f340b2a513d8e6731eb178'
                    }
                };
                return $http(reqvideo);
            },
        };
    });
