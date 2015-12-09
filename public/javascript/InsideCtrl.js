(function()
{
	angular.module('app')
   		.controller('InsideCtrl', ['$scope', 'ngDialog', InsideCtrl]);
    
    	function InsideCtrl($scope, ngDialog)
    	{
                $scope.jsonData = '{"foo": "bar"}';
                $scope.theme = 'ngdialog-theme-default4';
                
               $scope.open = function () {
				ngDialog.open({ template: 'firstDialogId', controller: 'InsideCtrl' });
			};


      }
        
})();





