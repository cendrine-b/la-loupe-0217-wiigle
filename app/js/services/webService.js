angular.module('app')
.service('webService', function($http) {
    return {
        getOne: function(query) {
          var reqweb = {
            method: 'GET',
            url: "https://api.cognitive.microsoft.com/bing/v5.0/search?q=" + query + "&count=1",
            headers: {
              'Ocp-Apim-Subscription-Key' : '9a7fe6e652c0485dbbf8946a0b2a8ade'
            }
          };
            return $http(reqweb);
        },
    };
});
