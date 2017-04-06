angular.module('app')
    .service('DeleteSearchService', function($http) {
        return {
            delete: function(id) {
                return $http.delete('/searches/' + id);
            },

            deleteAll: function() {
                return $http.delete('/searches');
            }
        };
    });
