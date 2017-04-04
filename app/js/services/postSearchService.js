angular.module('app')
    .service('postSearchService', function($http) {
        return {
            create: function(search, user, reqimage) {
                return $http.post('/searches', {content: search, user, reqimage});
            },

        };
    });
