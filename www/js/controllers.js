angular.module('starter.controllers', [])

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

.controller('ToursCtrl', function($scope) {
  $scope.locations = [
    { id: 1, title: 'Kirha', img: 'img/ionic.png' },
    { id: 2, title: 'Museum', img: 'img/ionic.png' },
    { id: 3, title: 'Church', img: 'img/ionic.png' },
    { id: 4, title: 'Church', img: 'img/ionic.png' },
    { id: 5, title: 'Mus', img: 'img/ionic.png' }
  ];
  $scope.tours = [
    { title: 'Church', id: 1, img: 'img/ionic.png', description: 'Tour to the church!' },
    { title: 'Museum', id: 2, img: 'img/ionic.png', description: 'Tour to the museum.' },
    { title: 'Museum2', id: 3, img: 'img/ionic.png', description: 'Tour to the second more cool museum.' }
  ];
})

.controller('TourCtrl', function($scope, $stateParams) {
  console.log($scope);
  console.log($stateParams);
  $scope.params = {
    id: $stateParams.tourId
  }
});
