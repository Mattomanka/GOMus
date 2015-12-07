angular.module('starter.controllers').controller('ToursCtrl', function($scope, $http, $ionicLoading) {
  $ionicLoading.show({
    template: 'loading'
  })
  lang = window.localStorage.getItem('lang');

  $http({method: 'GET', url: 'http://gid.areyoualive.ru/api/desktop/common_app.php?nfields=id,name,photo,description&where=Tour&lang='+lang})
  .then(function successCallback(response) {
  	$ionicLoading.hide()
    $scope.tours = response.data;
  })
});