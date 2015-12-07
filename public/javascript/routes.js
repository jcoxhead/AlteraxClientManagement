(function() {
    angular.module('app')
       .config(['$routeProvider', routes]);

      function routes($routeProvider)
      {

          $routeProvider
            .when('/', {
              templateUrl: '/templates/Clients.html',
              controller: 'ClientsController'
            })
            .when('/Clients', {
              templateUrl: '/templates/Clients.html',
              controller: 'ClientsController'
            });


      //       .when('/:id', {
      //         templateUrl: '/todoDetails.html',
      //         controller: 'TodoDetailsController'
      //      });
      }
})();