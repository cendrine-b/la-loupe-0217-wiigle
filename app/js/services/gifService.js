angular.module('app')
    .service('gifService', function($http) {
        return {
            getAll: function() {
                return $http.get('http://api.giphy.com/v1/gifs/search?q=' + $scope.query + '&api_key=dc6zaTOxFJmzC');
            },
            getOne: function(query) {
                return $http.get('http://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=dc6zaTOxFJmzC');
            },
            update: function(id, user) {
                return $http.put('/users/' + id, user);
            },
            delete: function(id) {
                return $http.delete('/users/' + id);
            }
        };
    });
