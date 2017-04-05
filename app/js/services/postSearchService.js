angular.module('app')
    .service('postSearchService', function($http) {
        return {
            create: function(search, user, image) {
                return $http.post('/searches', {content: search, user: user, image: image});
            },

            // DELETE SEARCH FROM DATABASE
            // delete: function(id) {
            //     return $http.delete('/searches/' + id);
            // }

        };
    });
