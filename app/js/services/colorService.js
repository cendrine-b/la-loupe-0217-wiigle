angular.module('app')
    .service('colorService', function($http) {
        return {

            getOne: function(query) {
                return $http.get("http://www.colourlovers.com/api/colors/keywords=" + query + "?format=json");
            },
        };
    });
