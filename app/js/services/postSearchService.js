angular.module('app')
    .service('postSearchService', function($http) {
        return {
            create: function(search, user, results) {
                return $http.post('/searches', {content: search, user: user, results: results});
            },
        };
    });
