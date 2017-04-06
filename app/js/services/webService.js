angular.module('app')
.service('webService', function($http) {
    return {
        getOne: function(query) {
          var reqweb = {
            method: 'GET',
            url: "https://api.cognitive.microsoft.com/bing/v5.0/search?q=" + query + "&count=1",
            headers: {
              'Ocp-Apim-Subscription-Key' : 'db52e387ab0b4f7d8e24e84d4ce1c846'
            }
          };
            return $http(reqweb);
        },
    };
});
