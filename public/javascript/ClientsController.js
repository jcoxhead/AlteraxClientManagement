(function()
{
	angular.module('app')
   		.controller('ClientsController', ['$scope', 'Clients', ClientsController]);
    
    	function ClientsController($scope, Clients)
    	{
      //     $scope.editing = [];
      
           Clients.success(function(data) {
                   $scope.clients = data;
           }).error(function(data, status)
           {
                 console.log(data, status);
                 $scope.clients = '';
           })
     

//           $scope.clients = Clients.query();
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