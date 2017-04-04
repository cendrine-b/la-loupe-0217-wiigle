angular.module('app')
.service('webService', function($http) {
    return {
        getOne: function(query) {
          var reqweb = {
            method: 'GET',
            url: "https://api.cognitive.microsoft.com/bing/v5.0/search?q=" + query + "&count=1",
            headers: {
              'Ocp-Apim-Subscription-Key' : 'cc51c49d686648b3b57a7d0f8a10a64a'
            }
          };
            return $http(reqweb);
        },
    };
});
