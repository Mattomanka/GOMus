angular.module('starter.controllers').controller('HomeCtrl', ['$scope', '$http', '$ionicModal', '$ionicLoading', '$translate', '$cordovaSQLite', function($scope, $http, $ionicModal, $ionicLoading, $translate, $cordovaSQLite) {
  $ionicLoading.show({
    template: '{{"loading" | translate}}'
  });
  lang = window.localStorage.getItem('lang');
  $http({method: 'GET', url: 'http://gid.areyoualive.ru/api/desktop/common_app.php?nfields=id,name,rating,photo&order=rating&count=10&where=Location&lang='+lang})
  .then(function successCallback(response) {
    $scope.locations = response.data;
  });

  $http({method: 'GET', url: 'http://gid.areyoualive.ru/api/desktop/common_app.php?nfields=id,name,photo,description&count=10&where=Tour&lang='+lang})
  .then(function successCallback(response) {
    $ionicLoading.hide()

    $scope.tours = response.data;
  })



  var query = "SELECT * FROM firstid";
        $cordovaSQLite.execute(db, query, []).then(function(res) {
            if(res.rows.length > 0) {
                for(var i = 0; i < res.rows.length; i++) {
                    console.log("SELECTED -> " + res.rows.item(i).firstname + " " + res.rows.item(i).lastname);
                }
            } else {
                console.log("No results found");
            }
        }, function (err) {
            console.error(err);
        });





  $ionicModal.fromTemplateUrl('templates/lang-modal.html', {
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
    window.localStorage.setItem('lang','en');
    $scope.modal.hide();
    window.location.reload(true);
  };
  $scope.chooseRU = function() {
    window.localStorage.setItem('lang','ru');
    $scope.modal.hide();
    window.location.reload(true);
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
