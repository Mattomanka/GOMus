angular.module('starter.controllers').controller('LocationsCtrl', function($scope, $http, $ionicLoading) {
  $ionicLoading.show({
    template: 'loading'
  })
  $http({method: 'GET', url: 'http://gid.areyoualive.ru/api/locations.php'})
  .then(function successCallback(response) {
    $ionicLoading.hide()
    $scope.locations = response.data;
  })
	
});