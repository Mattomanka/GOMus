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

.controller('HomeCtrl', function($scope, ToursPost, LocationsPost) {
  $scope.locations = LocationsPost.query();
  $scope.tours = ToursPost.query();
})

.controller('ToursCtrl', function($scope, ToursPost) {
  $scope.tours = ToursPost.query();
})

.controller('TourCtrl', function($scope, $stateParams, LocationsPost) {
  $scope.params = {
    id: $stateParams.tourId
  };
  $scope.locations = LocationsPost.query();
  $scope.map = { center: { latitude: 40.1451, longitude: -99.6680 }, zoom: 8 };
  $scope.marker = {
    id: 0,
    coords: {
      latitude: 40.1451,
      longitude: -99.6680
    },
    options: { draggable: true },
    events: {
      dragend: function (marker, eventName, args) {
        $log.log('marker dragend');
        var lat = marker.getPosition().lat();
        var lon = marker.getPosition().lng();
        $log.log(lat);
        $log.log(lon);

        $scope.marker.options = {
          draggable: true,
          labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
          labelAnchor: "100 0",
          labelClass: "marker-labels"
        };
      }
    }
  };
})

.controller('LocationsCtrl', function($scope, LocationsPost) {
  $scope.locations = LocationsPost.query();
})

.controller('LocationCtrl', ['$scope', '$ionicModal',
  function($scope, $ionicModal) {
    $scope.loctn = { title: 'ST. PAUL’S KIRCH', secTitle: '(ST. PAUL’S CATHEDRAL, GERMAN EVANGELICAL LUTHERAN CHURCH)', text: "St. Paul’s Cathedral (Kirch) - the Lutheran Cathedral of St. Paul's German Evangelical Lutheran Church in Ukraine, Ukrainian Lutheran religious center of the German tradition of the Church - the historic building and architectural monument of national importance, which houses the Department of the Bishop of the whole Church in Ukraine.<br />After signing a peace treaty between Russia and Turkey (1774-1775) Russian territory extended to the Crimea and Alexander I invited German colonists to populate those desert lands of south \"Novorosia\". In this way in young Odessa and its suburbs appeared many Lutheran communities, and in 1803-1804 the city governor, the Duke de Richelieu, had to ask the Russian Emperor to send a pastor to Odessa. 8 years passed before the first pastor came to South Palmyra. The first Lutheran Church was built much later, in 1827. According to the plan of Charles Boffoue it would be built on the highest point of the city, where still stands the Church of St. Paul (Lutheran Church - Kirha).<br />At the end of 19th century many buildings were built around the church, in which educational, cultural and social works were led. Over time, however, all these buildings became dilapidated and were demolished. The new church, which could accommodate 1200 people, was built on this place over two years. When Soviet rule came, the Church of St. Paul was closed. At the time of occupation of Odessa by German-Romanian forces (1941-1942) the religious life of the Lutheran Church improved.In post-war years the religious use of the church was suppressed and it was used as a music hall. In 1976 there was a fire, which destroyed all the nave of the church.<br />In the second time the Evangelical Lutheran Church was recorded in Odessa in 1990 and practically right away started to petit  for returning its church plot, the ruins of St. Paul's church and one of the neighbouring building, which had been built in the 19th century as an asylum for aged members of the community.With the assistance of the community of St. Paul, in 1993 the German Cultural Centre and \"Bavarian House\" were organized.<br />In 2002, at last reconstructed and completely rebuilt, the former asylum for the aged was revived as the \"Church Centre of St. Paul\". Restoration and construction works of the rest of the rooms are continuing.", img: 'img/kircha.jpg'};

    $ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
	
	$scope.slideLeft = function() {
		var current_index = $scope.loctn.img.indexOf($scope.imageSrc);
		current_index--;
		
		if(current_index < 0) current_index = $scope.loctn.img.length-1;
		
		$scope.imageSrc = $scope.loctn.img[current_index];
    };
	
	$scope.slideRight = function() {
		var current_index = $scope.loctn.img.indexOf($scope.imageSrc);
		current_index++;
		
		if(current_index >=$scope.loctn.img.length) current_index = 0;
		
		$scope.imageSrc = $scope.loctn.img[current_index];
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
	  $scope.imageSrc = $scope.loctn.img[0];
      console.log('Modal is shown!');
    });

    

    $scope.showImage = function(index) {
      $scope.openModal();
    }


  $scope.map = { center: { latitude: 40.1451, longitude: -99.6680 }, zoom: 8 };
  $scope.marker = {
    id: 0,
    coords: {
      latitude: 40.1451,
      longitude: -99.6680
    },
    options: { draggable: true },
    events: {
      dragend: function (marker, eventName, args) {
        $log.log('marker dragend');
        var lat = marker.getPosition().lat();
        var lon = marker.getPosition().lng();
        $log.log(lat);
        $log.log(lon);

        $scope.marker.options = {
          draggable: true,
          labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
          labelAnchor: "100 0",
          labelClass: "marker-labels"
        };
      }
    }
  };
  }


]);