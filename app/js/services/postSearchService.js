angular.module('app')
    .service('postSearchService', function($http) {
        return {
            create: function(search, user, image) {
                return $http.post('/searches', {content: search, user: user, image: image});
            },
        };
    });
