angular.module('app')
    .service('colorService', function($http) {
        return {

            getOne: function(query) {
                return $http.get("http://www.colr.org/json/tag/" + query);
            },
        };
    });
