angular.module('app')



.service('randomImgService', function($http) {
    return {
        getOne: function() {
          var reqimage = {
            method: 'GET',
            url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=cat",
            headers: {
              'Ocp-Apim-Subscription-Key' : '78f43857331d4282a03dbb0e44d495fc'
            }
          };
            return $http(reqimage);
        },
    };
});
