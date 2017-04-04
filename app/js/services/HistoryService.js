angular.module('app')
    .service('HistoryService', function($http) {
        return {
            getAll: function() {
                return $http.get('/searches');
            },
        };
    });
