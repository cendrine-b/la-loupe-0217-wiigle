angular.module('app')
.service('webService', function($http) {
    return {
        getOne: function(query) {
          var reqweb = {
            method: 'GET',
            url: "https://api.cognitive.microsoft.com/bing/v5.0/search?q=" + query + "&count=1",
            headers: {
              'Ocp-Apim-Subscription-Key' : '881bb4a4635d44ce994fab99d2c54f0a'
            }
          };
            return $http(reqweb);
        },
    };
});
