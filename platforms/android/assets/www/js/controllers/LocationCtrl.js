angular.module('starter.controllers').controller('LocationCtrl', function($scope, $http, $stateParams, $ionicModal, $ionicLoading) {
  var coordArray =[];
	var currentLocationID = parseInt($stateParams.locationId.slice(2));
  $scope.currID = currentLocationID;
  $ionicLoading.show({
    template: 'loading'
  })
	lang = window.localStorage.getItem('lang');
  console.log(lang);
  $http({method: 'GET', url: 'http://gid.areyoualive.ru/api/desktop/common_app.php?nfields=*&sfield=id&count=1&sfieldValue=' + currentLocationID + '&where=Location&lang='+lang})
  .then(function successCallback(response) {
    console.log(response.data);
		$ionicLoading.hide();
		$scope.loctn = response.data[0];
    console.log($scope.loctn.name)
		coordArray = $scope.loctn.coordinates.split(',');
		$scope.marker.coords.latitude = parseFloat(coordArray[0]);
		$scope.marker.coords.longitude = parseFloat(coordArray[1]);
		$scope.map.center.latitude = parseFloat(coordArray[0]);
		$scope.map.center.longitude = parseFloat(coordArray[1]);
	});

  $http({method: 'GET', url: 'http://gid.areyoualive.ru/api/check_inner_loc.php?ID=' + currentLocationID + '&bool=1'})
  .then(function successCallback(response) {
      $scope.check_inner_loc = response.data;
  });

  $http({method: 'GET', url: 'http://gid.areyoualive.ru/api/check_quest.php?ID=' + currentLocationID + '&bool=1'})
  .then(function successCallback(response) {
      $scope.check_quest = response.data;
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

    $scope.map = { center: { latitude: 46.4825832, longitude: 30.7226443 }, zoom: 17, disableDefaultUI: true };
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
});