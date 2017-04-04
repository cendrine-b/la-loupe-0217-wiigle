angular.module('app')



    .service('videoService', function($http) {
        return {
            getOne: function(query) {
                var reqvideo = {
                    method: 'GET',
                    url: "https://api.cognitive.microsoft.com/bing/v5.0/videos/search?q=" + query + "&count=10&offset=0&safeSearch=Moderate",
                    headers: {
                        'Ocp-Apim-Subscription-Key': 'cc51c49d686648b3b57a7d0f8a10a64a'
                    }
                };
                return $http(reqvideo);
            },
        };
    });
