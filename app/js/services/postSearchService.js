angular.module('app')
    .service('postSearchService', function($http) {
        return {
            create: function(search, user) {
                return $http.post('/searches', {content: search, user});
            },

            // DELETE SEARCH FROM DATABASE
            // delete: function(id) {
            //     return $http.delete('/searches/' + id);
            // }

        };
    });
