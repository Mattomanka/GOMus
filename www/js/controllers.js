angular.module('starter.controllers', ['starter.factories'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('HomeCtrl', function($scope, $http, $ionicLoading) {
   $ionicLoading.show({
    template: 'loading'
  })
  $http({method: 'GET', url: 'http://gid.areyoualive.ru/api/locations.php'})
  .then(function successCallback(response) {
    $ionicLoading.hide()
    $scope.locations = response.data;
  })
  $http({method: 'GET', url: 'http://gid.areyoualive.ru/api/tours.php'})
  .then(function successCallback(response) {
    $scope.tours = response.data;
  })
})

.controller('AboutCtrl',function($scope) {
  $scope.aversion = appVersion;
})

.controller('ToursCtrl', function($scope, $http, $ionicLoading) {
  $ionicLoading.show({
    template: 'loading'
  })
  $http({method: 'GET', url: 'http://gid.areyoualive.ru/api/tours.php'})
  .then(function successCallback(response) {
    $ionicLoading.hide()
    $scope.tours = response.data;
  })
})

.controller('TourCtrl', ['$scope', '$http', '$ionicLoading', '$stateParams', 'uiGmapGoogleMapApi', function($scope, $http, $ionicLoading, $stateParams, uiGmapGoogleMapApi) {
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
      
      var parentCoordWrapp = [pathArray,centerCoordinates];

    return parentCoordWrapp;
  }, function errorCallback(response) {
      return 0;
  }).then(function successCallback(reseiveObj) {
      $scope.map = {center: reseiveObj[1], zoom: 14};
      $scope.polylines = [];
      uiGmapGoogleMapApi.then(function(){
        $scope.polylines = [
       {
         id: 1,
         path: reseiveObj[0],
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
}])



// .controller('TourCtrl', function($scope, $stateParams, uiGmapGoogleMapApi) {
//   $scope.params = {
//     id: $stateParams.tourId
//   };
//   $scope.locations = LocationsPost.query();
//   $scope.map = {center: {latitude: 46.4825832, longitude: 30.7226443 }, zoom: 14, bounds: {}};
//         $scope.polylines = [];
//         uiGmapGoogleMapApi.then(function(){
//           $scope.polylines = [
//             {
//                 id: 1,
//                 path: [
//                     {
//                         latitude: 46.484,
//                         longitude: 30.71
//                     },
//                     {
//                         latitude: 46.4825833,
//                         longitude: 30.7226443
//                     },
//                     {
//                         latitude: 46.483,
//                         longitude: 30.73
//                     },
//                     {
//                         latitude: 46.2,
//                         longitude: 30.5
//                     }
//                 ],
//                 stroke: {
//                     color: '#6060FB',
//                     weight: 3
//                 },
//                 editable: false,
//                 draggable: false,
//                 geodesic: true,
//                 visible: true,
//                 icons: [{
//                     icon: {
//                         path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW
//                     },
//                     offset: '25px',
//                     repeat: '50px'
//                 }]
//             }
//         ];
//         });
// })

.controller('LocationsCtrl', function($scope, $http, $ionicLoading) {
  $ionicLoading.show({
    template: 'loading'
  })
  $http({method: 'GET', url: 'http://gid.areyoualive.ru/api/locations.php'})
  .then(function successCallback(response) {
    $ionicLoading.hide()
    $scope.locations = response.data;
  })
	
})

.controller('LocationCtrl', ['$scope','$http', '$stateParams', '$ionicModal',
  function($scope, $http, $stateParams, $ionicModal, $ionicLoading) {
    var coordArray =[];
  	var currentLocationID = parseInt($stateParams.locationId.slice(2));
    // $ionicLoading.show({
    //   template: 'loading'
    // })
    $http({method: 'GET', url: 'http://gid.areyoualive.ru/api/locations.php'})
    .then(function successCallback(response) {
      //$ionicLoading.hide()
      $scope.locations = response.data;
    })

	$http.get("http://gid.areyoualive.ru/api/location.php?id="+currentLocationID)
    .success(function(response) {
			console.log(response);
		$scope.loctn = response[0];
		$scope.loctn.innerLocations = response.innerLocations;
		coordArray = $scope.loctn.coordinates.split(',');
		$scope.marker.coords.latitude = parseFloat(coordArray[0]);
		$scope.marker.coords.longitude = parseFloat(coordArray[1]);
		$scope.map.center.latitude = parseFloat(coordArray[0]);
		$scope.map.center.longitude = parseFloat(coordArray[1]);
	});
	
	 $ionicModal.fromTemplateUrl('full-description-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.contentModal = modal;
    })
	
	$scope.openContentModal = function() {
      $scope.contentModal.show();
    };
	
	$scope.closeContentModal = function() {
      $scope.contentModal.hide();
    };

    $ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal= modal;
    });

    $scope.map = { center: { latitude: 46.4825832, longitude: 30.7226443 }, zoom: 17 };
    $scope.marker = {
      id: 'l0',
      coords: {
        latitude: 46.4825832,
        longitude: 30.7226443
      },
      options: { draggable: false },
      events: {
        dragend: function (marker, eventName, args) {
          $log.log('marker dragend');
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();
          $log.log(lat);
          $log.log(lon);

          $scope.marker.options = {
            draggable: false,
            labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }
    };
	
	$scope.slideLeft = function() {
		var current_index = $scope.loctn.photo.indexOf($scope.imageSrc);
		current_index--;
		
		if(current_index < 0) current_index = $scope.loctn.photo.length-1;
		
		$scope.imageSrc = $scope.loctn.photo[current_index];
    };
	
	$scope.slideRight = function() {
		var current_index = $scope.loctn.photo.indexOf($scope.imageSrc);
		current_index++;
		
		if(current_index >=$scope.loctn.photo.length) current_index = 0;
		
		$scope.imageSrc = $scope.loctn.photo[current_index];
    };
	
    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    $scope.$on('modal.shown', function() {
	  $scope.imageSrc = $scope.loctn.photo[0];
      console.log('Modal is shown!');
    });

    

    $scope.showImage = function(index) {
      $scope.openModal();
    }
  }


]);