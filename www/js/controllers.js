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

.controller('ToursCtrl', function($scope, $http) {
  $scope.locations = [
    { id: 1, title: 'Kirha', img: 'img/ionic.png' },
    { id: 2, title: 'Museum', img: 'img/shenok5.jpg' },
    { id: 3, title: 'Church', img: 'img/shenok5.jpg' },
    { id: 4, title: 'Church', img: 'img/shenok5.jpg' }
  ];
  $scope.tours = [
    { title: 'Church', id: 1, img: 'img/ionic.png', description: 'Tour to the church!' },
    { title: 'Museum', id: 2, img: 'img/ionic.png', description: 'Tour to the museum.' },
    { title: 'Museum2', id: 3, img: 'img/ionic.png', description: 'Tour to the second more cool museum.' }
  ];

  $http.get('http://gid.areyoualive.ru/gid.php').then(function(resp) {
    console.log('Success', resp);
    // For JSON responses, resp.data contains the result
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  })

})

.controller('TourCtrl', function($scope, $stateParams) {
  console.log($scope);
  console.log($stateParams);
  $scope.params = {
    id: $stateParams.tourId
  };
  $scope.locations = [
    { id: 1, title: 'Kirha', description: 'Some location in this tour', img: 'img/kircha.jpg' },
    { id: 2, title: 'Museum', description: 'Museum of nature science', img: 'img/shenok5.jpg' },
    { id: 3, title: 'Church', description: 'Take me to church!', img: 'img/cat.jpg' },
    { id: 4, title: 'Church', description: '.... church!', img: 'img/shenok5.jpg' }
  ];
})

.controller('LocationsCtrl', function($scope, $http) {
  $scope.locations = [
    { id: 1, title: 'Kirha', img: 'img/kircha.jpg' },
    { id: 2, title: 'Museum', img: 'img/shenok5.jpg' },
    { id: 3, title: 'Church', img: 'img/cat.jpg' },
    { id: 4, title: 'Church', img: 'img/shenok5.jpg' }
  ];
})

.controller('LocationCtrl', ['$scope', '$ionicModal',
  function($scope, $ionicModal) {
    console.log('location');
    console.log($scope);
    $scope.loctn = { title: 'ST. PAUL’S KIRCH', secTitle: '(ST. PAUL’S CATHEDRAL, GERMAN EVANGELICAL LUTHERAN CHURCH)', text: "St. Paul’s Cathedral (Kirch) - the Lutheran Cathedral of St. Paul's German Evangelical Lutheran Church in Ukraine, Ukrainian Lutheran religious center of the German tradition of the Church - the historic building and architectural monument of national importance, which houses the Department of the Bishop of the whole Church in Ukraine.<br />After signing a peace treaty between Russia and Turkey (1774-1775) Russian territory extended to the Crimea and Alexander I invited German colonists to populate those desert lands of south \"Novorosia\". In this way in young Odessa and its suburbs appeared many Lutheran communities, and in 1803-1804 the city governor, the Duke de Richelieu, had to ask the Russian Emperor to send a pastor to Odessa. 8 years passed before the first pastor came to South Palmyra. The first Lutheran Church was built much later, in 1827. According to the plan of Charles Boffoue it would be built on the highest point of the city, where still stands the Church of St. Paul (Lutheran Church - Kirha).<br />At the end of 19th century many buildings were built around the church, in which educational, cultural and social works were led. Over time, however, all these buildings became dilapidated and were demolished. The new church, which could accommodate 1200 people, was built on this place over two years. When Soviet rule came, the Church of St. Paul was closed. At the time of occupation of Odessa by German-Romanian forces (1941-1942) the religious life of the Lutheran Church improved.In post-war years the religious use of the church was suppressed and it was used as a music hall. In 1976 there was a fire, which destroyed all the nave of the church.<br />In the second time the Evangelical Lutheran Church was recorded in Odessa in 1990 and practically right away started to petit  for returning its church plot, the ruins of St. Paul's church and one of the neighbouring building, which had been built in the 19th century as an asylum for aged members of the community.With the assistance of the community of St. Paul, in 1993 the German Cultural Centre and \"Bavarian House\" were organized.<br />In 2002, at last reconstructed and completely rebuilt, the former asylum for the aged was revived as the \"Church Centre of St. Paul\". Restoration and construction works of the rest of the rooms are continuing.", img: 'img/kircha.jpg'};

        $ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

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
      console.log('Modal is shown!');
    });

    $scope.imageSrc = $scope.loctn.img;

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
  }
]);