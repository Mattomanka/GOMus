angular.module('starter.controllers').controller('innerLocationCtrl', function($scope, $http, $stateParams, $ionicModal, $ionicLoading) {
  var coordArray =[];
  var currentInLocationID = parseInt($stateParams.lcId.slice(2));
  console.log(currentInLocationID)
  //var currentInLocationID = 29;
  $scope.currID = currentInLocationID;
  $ionicLoading.show({
    template: '{{"loading" | translate}}'
  })
  $http({method: 'GET', url: 'http://gid.areyoualive.ru/api/inner_locations.php'})
  .then(function successCallback(response) {
    $ionicLoading.hide()
    $scope.locations = response.data;
  })
	$http.get("http://gid.areyoualive.ru/api/inner_loc.php?id="+currentInLocationID)
    .success(function(response) {
		console.log(response);
		$scope.loctn = response[0];
		console.log(response[0].description);
	});
	
	
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