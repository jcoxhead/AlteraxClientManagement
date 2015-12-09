(function()
{
	var app = angular.module('app', ['ngRoute', 'ngResource', 'ngDialog']);

	app.factory('Clients', ['$resource', '$http', function($resource, $http){
          return $resource('/api/clients/:id', null, {
            'update': { method:'PUT' }
          });
        //   return $http.get('/api/clients');
        }]);

})();