(function() {
    angular.module('validationApp')
       .config(['$routeProvider', routes]);

      function routes($routeProvider)
      {
           $routeProvider
            .when('/', {
              templateUrl: '/templates/ValidationClient.html',
              controller: 'mainController'
            })
            .when('/NgMessages', {
              templateUrl: '/templates/SubController.html',
              controller: 'subController'
            })
            .when('/FormOnly', {
              templateUrl: '/templates/formOnlyController.html',
              controller: 'validationMainController as vm'
            })
            // .when('/formValidation', {
            //   templateUrl: '/templates/ValidationClient.html',
            //   controller: 'mainController'
            // })
            
      //       .when('/:id', {
      //         templateUrl: '/todoDetails.html',
      //         controller: 'TodoDetailsController'
      //      });
      }
})();