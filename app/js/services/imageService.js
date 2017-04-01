angular.module('app')



.service('imageService', function($http) {
    return {
        getOne: function(query) {
          var reqimage = {
            method: 'GET',
            url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + query + "&count=10&offset=0&mkt=en-us&safeSearch=Moderate",
            headers: {
              'Ocp-Apim-Subscription-Key' : '9a7fe6e652c0485dbbf8946a0b2a8ade'
            }
          };
            return $http(reqimage);
        },
    };
});
