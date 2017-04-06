angular.module('app')



.service('imageService', function($http) {
    return {
        getOne: function(query) {
          var reqimage = {
            method: 'GET',
            url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + query + "&count=10&offset=0&mkt=en-us&safeSearch=Moderate",
            headers: {
              'Ocp-Apim-Subscription-Key' : 'db52e387ab0b4f7d8e24e84d4ce1c846'
            }
          };
            return $http(reqimage);
        },
    };
});
