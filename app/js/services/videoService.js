angular.module('app')



    .service('videoService', function($http) {
        return {
            getOne: function(query) {
                var reqvideo = {
                    method: 'GET',
                    url: "https://api.cognitive.microsoft.com/bing/v5.0/videos/search?q=" + query + "&count=10&offset=0&safeSearch=Moderate",
                    headers: {
                        'Ocp-Apim-Subscription-Key': '422b0d919297451eb41dc323a80bac58'
                    }
                };
                return $http(reqvideo);
            },
        };
    });
