angular.module('starter.controllers').controller('ToursCtrl', function($scope, $http, $ionicLoading) {
  $ionicLoading.show({
    template: 'loading'
  })
  $http({method: 'GET', url: 'http://gid.areyoualive.ru/api/tours.php'})
  .then(function successCallback(response) {
    $ionicLoading.hide()
    $scope.tours = response.data;
  })
});