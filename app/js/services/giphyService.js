angular.module('app')
    .service('GiphyService', function($http) {
            return {
                getAll: function(giphy) {
                    return $http.get("http://api.giphy.com/v1/gifs/search?q=" + $scope.query + "&api_key=dc6zaTOxFJmzC");
                      },
                    getOne: function(query) {
                            return $http.get("http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC");
                        },
                        update: function(id, giphy) {
                            return $http.put('/giphys/' + id, giphy);
                        },
                        delete: function(id) {
                            return $http.put('/giphys/' + id);
                        }
                };
            });
