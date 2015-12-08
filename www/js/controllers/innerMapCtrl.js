angular.module('starter.controllers').controller('innerMapCtrl', function($scope, $http, $stateParams, $ionicLoading) {
	var coordArray =[];
	console.log($stateParams);
	var currentLocationID = 15;
	$scope.currID = currentLocationID;
	$ionicLoading.show({
		template: '{{"loading" | translate}}'
	})
	$http({method: 'GET', url: 'http://gid.areyoualive.ru/api/locations.php'})
	.then(function successCallback(response) {
		$ionicLoading.hide()
		$scope.locations = response.data;
	})
	$http.get("http://gid.areyoualive.ru/api/location.php?id="+currentLocationID)
	.success(function(response) {
			console.log(response);
		$scope.loctn = response[0];
		$scope.loctn.innerLocations = response.innerLocations;
		console.log(response.innerLocations)
	});
});