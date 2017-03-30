angular.module('app')



.service('randomImgService', function($http) {
    return {
        getOne: function() {
          var reqimage = {
            method: 'GET',
            url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=cat",
            headers: {
              'Ocp-Apim-Subscription-Key' : 'c6482be0e97640cfaf43b135b9615b55'
            }
          };
            return $http(reqimage);
        },
    };
});
