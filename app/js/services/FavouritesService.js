angular.module('app')
    .service('FavouritesService', function($http) {
        return {
            getAll: function() {
                return $http.get('/searches');
            },
            getOne: function(content) {
                return $http.get('/searches/' + content);
            },
        };
    });
