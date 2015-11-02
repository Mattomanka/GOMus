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
   $scope.map = { 
    center: { latitude: 46.460445, longitude: -30.7076676 }, 
    zoom: 11 
  };
})

.controller('LocationsCtrl', function($scope, LocationsPost, SingleLocationsPost) {
  $scope.locations = LocationsPost.query();
  
  $scope.getLocation = function(id) {
		SingleLocationsPost.currentLocationID = id;
    };
  
})

.controller('LocationCtrl', ['$scope', '$ionicModal',
  function($scope, $ionicModal) {
		
    $scope.loctn = { title: 'ST. PAUL’S KIRCH', secTitle: '(ST. PAUL’S CATHEDRAL, GERMAN EVANGELICAL LUTHERAN CHURCH)', text: "St. Paul’s Cathedral (Kirch) - the Lutheran Cathedral of St. Paul's German Evangelical Lutheran Church in Ukraine, Ukrainian Lutheran religious center of the Gng.", img: ['img/kircha.jpg','img/kircha1.jpg','img/kircha2.jpg']};
	

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
      // switch(index) {
      //   case 1:
      //     $scope.imageSrc = 'http://ionicframework.com/img/ionic-logo-blog.png';
      //     break;
      //   case 2:
      //     $scope.imageSrc  = 'http://ionicframework.com/img/ionic_logo.svg';
      //     break;
      //   case 3:
      //     $scope.imageSrc  = 'http://ionicframework.com/img/homepage/phones-weather-demo@2x.png';
      //     break;
      // }
      $scope.openModal();
    }

    
  $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  }


]);