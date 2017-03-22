angular.module('app')
    .service('spotifyService', function($http) {
      return {
            getOne: function(query) {
                return $http.get('https://api.spotify.com/v1/search?q=' + query + '&type=track&limit=1');
            },
        };
    });
