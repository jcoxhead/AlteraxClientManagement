(function()
{
	angular.module('app')
   		.controller('ClientsController', ['$scope', 'Clients', 'ngDialog', ClientsController]);
    
    	function ClientsController($scope, Clients, ngDialog)
    	{
               $scope.clients = Clients.query(
                  function successCallback(response) {
                  }, function errorCallback(response) {
                        console.log(response);
                });
                
                $scope.user = '';
                   
                $scope.jsonData = '{"foo": "bar"}';
                $scope.theme = 'ngdialog-theme-default1';
                
            //    $scope.open = function () {
		// 		ngDialog.open({ template: 'firstDialogId', controller: 'ClientsController' });
		// 	};
        
        // $scope.preCloseCallbackOnScope = function (value) {
        //         if(confirm('Close it?')) {
        //             return true;
        //         }
        //         return false;
        //     };
        //           
        //        $scope.open = function () {
        //           ngDialog.openConfirm({
        //             template: 'firstDialogId',
        //             className: 'ngdialog-theme-default',
        //             controller: 'ClientsController',
        //             scope: $scope,
        //             preCloseCallback: 'preCloseCallbackOnScope',
        //         }).then(function (value) {
        //             console.log('Modal promise resolved. Value: ', value);
        //         }, function (reason) {
        //             console.log('Modal promise rejected. Reason: ', reason);
        //             
        //         });
        //     };
        //     
             $scope.open = function () {
                ngDialog.openConfirm({
                    template: 'dialogWithNestedConfirmDialogId',
                    className: 'ngdialog-theme-default',
                    preCloseCallback: function(value) {
                        var nestedConfirmDialog = ngDialog.openConfirm({
                            template:
                                    '<p>Are you sure you want to cancel?</p>' +
                                    '<div class="ngdialog-buttons">' +
                                        '<button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">No' +
                                        '<button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm(1)">Yes' +
                                    '</button></div>',
                            plain: true,
                            className: 'ngdialog-theme-default'
                        });
                        return nestedConfirmDialog;
                    },
                    scope: $scope
                })
                .then(function(value){
                    console.log('resolved:' + value);
                }, function(value){
                    console.log('rejected:' + value);
                });
            };


            // $scope.editing = [];
      
           
// 
//           $scope.save = function(){
//             if(!$scope.newTodo || $scope.newTodo.length < 1) 
//                 return;
//             var client = new Clients({ name: $scope.newTodo, completed: false });
// 
//             client.$save(function(){
//               $scope.clients.push(client);
//               $scope.newTodo = ''; // clear textbox
//             });
//           }
// 
//           $scope.update = function(index){
//             // var client = $scope.clients[index];
//             // Clients.update({id: client._id}, client);
//             // $scope.editing[index] = false;
//           }
// 
//           $scope.edit = function(index){
//             $scope.editing[index] = angular.copy($scope.clients[index]);
//           }
// 
//           $scope.cancel = function(index){
//             // $scope.clients[index] = angular.copy($scope.editing[index]);
//             // $scope.editing[index] = false;
//           }
// 
//           $scope.remove = function(index){
//             // var client = $scope.clients[index];
//             // Clients.remove({id: client._id}, function(){
//             //   $scope.clients.splice(index, 1);
//             // });
//           }

      }
        
})();