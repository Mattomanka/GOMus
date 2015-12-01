angular.module('starter.controllers').controller('QuestCtrl', ['$scope', '$ionicModal', '$http', '$stateParams', '$ionicLoading', function ($scope, $ionicModal, $http, $stateParams, $ionicLoading) {
  	
  console.log($stateParams);


  $scope.showSelectValues = function(mySelect) {
    console.log(mySelect);
  }


  $scope.questions = [
    { 'question': 'Text question', 
      'answers': ['first', 'second', 'third', 'fourth'], 
      'rightAnsw': 1, 
      'type': 1},
    { 'question': 'Text question', 
      'answers': ['first', 'second', 'third', 'fourth'], 
      'rightAnsw': 1, 
      'type': 1},
    { 'question': 'http://cs935.vk.me/u3357280/24443421/x_d627df82.jpg', 
      'answers': ['first', 'second', 'third', 'fourth'], 
      'rightAnsw': 3, 
      'type': 2},
    { 'question': 'Text question type 3', 
      'answers': [ 'http://cs935.vk.me/u3357280/24443421/x_d627df82.jpg ', 'http://cs935.vk.me/u3357280/24443421/x_d627df82.jpg', 'third', 'fourth'], 
      'rightAnsw': 3, 
      'type': 3}                     
  ];



  $ionicModal.fromTemplateUrl('image-quest-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.submitAnswer=function(){
    console.log($scope.questions);
  }

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
  $scope.$on('modal.shown', function(elem) {
    console.log('Modal is shown!');
  });

  $scope.openImage = function(src) {
    $scope.currSrc = src;
    $scope.openModal();
  }
}
]);