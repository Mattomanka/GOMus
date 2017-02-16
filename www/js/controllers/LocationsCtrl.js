angular.module('starter.controllers').controller('LocationsCtrl', ['$scope', '$http', '$ionicLoading', 'uiGmapGoogleMapApi', function($scope, $http, $ionicLoading, uiGmapGoogleMapApi) {
  $ionicLoading.show({
    template: '{{"loading" | translate}}'
  })
  lang = window.localStorage.getItem('lang');

  $http({method: 'GET', url: 'http://mattomanka.esy.es/gomus/api/desktop/common_app.php?nfields=id,name,photo,description,coordinates&where=Location&lang='+lang})
  .then(function successCallback(response) {
  	console.log(response.data);
    $ionicLoading.hide()
    $scope.locations = response.data;
	 var pathArray = [], centerCoordinates = {latitude:0, longitude:0};
	
	$scope.markersArray = [];
	
    for(var i = 0; i<response.data.length; i++){
		
		//Calculating route
        coordinatesArray = response.data[i].coordinates.split(',');// Separate current location coordinates 
        if(coordinatesArray.length>1){
          pathArray[i]= {latitude: coordinatesArray[0], longitude:coordinatesArray[1]};
          centerCoordinates.latitude += coordinatesArray[0]/response.data.length;
          centerCoordinates.longitude += coordinatesArray[1]/response.data.length;
        }
		//Calculating route \\
        
		//Creating markers on the map
		var tempMarker = {};
		tempMarker = {
		  options: { draggable: false },
		  events: {
			dragend: function (marker, eventName, args) {
			  $log.log('marker dragend');
			  var lat = marker.getPosition().lat();
			  var lon = marker.getPosition().lng();
			  $log.log(lat);
			  $log.log(lon);

			 marker.options = {
				draggable: false,
				labelContent: "lat: " + marker.coords.latitude + ' ' + 'lon: ' +marker.coords.longitude,
				labelAnchor: "100 0",
				labelClass: "marker-labels"
			  };
			}
		  }
		};
		tempMarker.id = 'l'+i;
		tempMarker.coords = {};
		tempMarker.coords.latitude = coordinatesArray[0];
		tempMarker.coords.longitude = coordinatesArray[1];
		$scope.markersArray[i] = tempMarker;
		
      }
	  
      coordArray = response.data[0].coordinates.split(',');
      centerCoordinates.latitude = coordArray[0];
      centerCoordinates.longitude = coordArray[1];
      
      var parentCoordWrapp = {'pathArray':pathArray, 'centerCoordinates':centerCoordinates};

    return parentCoordWrapp;
  }, function errorCallback(response) {
      return 0;
  }).then(function successCallback(reseiveObj) {
      $scope.map = {center: reseiveObj.centerCoordinates, zoom: 12};
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
             path: google.maps.SymbolPath.FORWARD_OPEN_ARROW
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