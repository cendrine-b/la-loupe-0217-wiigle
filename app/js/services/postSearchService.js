angular.module('app')
    .service('postSearchService', function($http) {
        return {
            create: function(search) {
                return $http.post('/search', {content: search});
            },

        };
    });
