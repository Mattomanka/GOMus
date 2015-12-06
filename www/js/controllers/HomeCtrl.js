angular.module('starter.controllers').controller('HomeCtrl', ['$scope', '$http', '$ionicModal', '$ionicLoading', function($scope, $http, $ionicModal, $ionicLoading) {
   $ionicLoading.show({
    template: 'loading'
  });
  $http({method: 'GET', url: 'http://gid.areyoualive.ru/api/locations.php'})
  .then(function successCallback(response) {
    $ionicLoading.hide()
    console.log(response.data);
    $scope.locations = [ response.data[0], response.data[1], response.data[3] ];
  })
  $http({method: 'GET', url: 'http://gid.areyoualive.ru/api/tours.php'})
  .then(function successCallback(response) {
    $scope.tours = response.data;
  })

  $ionicModal.fromTemplateUrl('lang-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
    showLangOnNull();
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  $scope.chooseEN = function() {
    user.lang = '[en:]';
    window.localStorage.setItem('lang','en');
    $scope.modal.hide();
  };
  $scope.chooseRU = function() {
    user.lang = '[ru:]';
    window.localStorage.setItem('lang','ru');
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

  showLangOnNull = function () {
    if (!window.localStorage.getItem('lang'))
        $scope.openModal();
  };

}]);
