angular.module('starter.controllers').controller('innerMapCtrl', function($scope, $http, $stateParams, $ionicLoading) {
	var coordArray =[];
	var currID = parseInt($stateParams.mpId.slice(2));
	$scope.currID = currID;
	$ionicLoading.show({
		template: '{{"loading" | translate}}'
	});
 	lang = window.localStorage.getItem('lang');
	$http({method: 'GET', url: 'http://mattomanka.esy.es/gomus/api/desktop/common_app.php?nfields=*&where=InnerLocation&lang='+lang})
  	.then(function successCallback(response) {
	  	console.log(response.data);
	    $ionicLoading.hide()
	    $scope.innerLocations = response.data;
	});

});