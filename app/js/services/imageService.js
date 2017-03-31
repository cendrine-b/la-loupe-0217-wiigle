angular.module('app')



.service('imageService', function($http) {
    return {
        getOne: function(query) {
          var reqimage = {
            method: 'GET',
            url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + query + "&count=10&offset=0&mkt=en-us&safeSearch=Moderate",
            headers: {
              'Ocp-Apim-Subscription-Key' : 'c6482be0e97640cfaf43b135b9615b55'
            }
          };
            return $http(reqimage);
        },
    };
});
