angular.module('app')



.service('randomImgService', function($http) {
    return {
        getOne: function() {
          var reqimage = {
            method: 'GET',
            url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=cat",
            headers: {
              'Ocp-Apim-Subscription-Key' : 'd401bbdf06f340b2a513d8e6731eb178'
            }
          };
            return $http(reqimage);
        },
    };
});
