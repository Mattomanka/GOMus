angular.module('starter.controllers').controller('HomeCtrl', function($scope, $http, $ionicLoading) {
   $ionicLoading.show({
    template: 'loading'
  })
  $http({method: 'GET', url: 'http://gid.areyoualive.ru/api/locations.php'})
  .then(function successCallback(response) {
    $ionicLoading.hide()
    console.log(response.data);
    $scope.locations = [ response.data[0], response.data[1], response.data[3] ];
  })
  $http({method: 'GET', url: 'http://gid.areyoualive.ru/api/tours.php'})
  .then(function successCallback(response) {
    $scope.tours = response.data;
  })
});