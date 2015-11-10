angular.module('starter.controllers').controller('TourCtrl', ['$scope', '$http', '$ionicLoading', '$stateParams', 'uiGmapGoogleMapApi', function($scope, $http, $ionicLoading, $stateParams, uiGmapGoogleMapApi) {
  $scope.params = {
    id: $stateParams.tourId
  };
  $ionicLoading.show({
    template: 'Loading...'
   })
	$http({method: 'GET', url: 'http://gid.areyoualive.ru/api/locations.php'})
  .then(function successCallback(response) {
    $ionicLoading.hide()
    $scope.locations = response.data;
    var pathArray = [], centerCoordinates = {latitude:0, longitude:0};
    for(var i = 0; i<response.data.length; i++){
        coordinatesArray = response.data[i].coordinates.split(',');
        pathArray[i]= {latitude: coordinatesArray[0], longitude:coordinatesArray[1]};
         centerCoordinates.latitude += coordinatesArray[0]/response.data.length;
         centerCoordinates.longitude += coordinatesArray[1]/response.data.length;
      }
      
      var parentCoordWrapp = {'pathArray':pathArray,'centerCoordinates':centerCoordinates};

    return parentCoordWrapp;
  }, function errorCallback(response) {
      return 0;
  }).then(function successCallback(reseiveObj) {
      $scope.map = {center: reseiveObj.centerCoordinates, zoom: 14};
      $scope.polylines = [];
      uiGmapGoogleMapApi.then(function(){
        $scope.polylines = [
       {
         id: 1,
         path: reseiveObj.pathArray,
         stroke: {
           color: '#6060FB',
           weight: 2
         },
         editable: false,
         draggable: false,
         geodesic: true,
         visible: true,
         icons: [{
           icon: {
             path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW
           },
           offset: '25px',
           repeat: '50px'
         }]
       }
      ];
      
      });
      }, function errorCallback(reseiveObj) {
         return 0;
  });
}]);