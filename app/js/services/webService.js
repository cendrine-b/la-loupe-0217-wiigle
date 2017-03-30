angular.module('app')
.service('webService', function($http) {
    return {
        getOne: function(query) {
          var reqweb = {
            method: 'GET',
            url: "https://api.cognitive.microsoft.com/bing/v5.0/search?q=" + query + "&count=1",
            headers: {
              'Ocp-Apim-Subscription-Key' : 'c6482be0e97640cfaf43b135b9615b55'
            }
          };
            return $http(reqweb);
        },
    };
});
