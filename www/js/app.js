// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var appVersion = "0.6.4";

angular.module('starter', ['ionic', 'starter.controllers', 'uiGmapgoogle-maps', 'pascalprecht.translate'])

.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
])

.config(function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider, $translateProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.tours', {
    url: '/tours',
    views: {
      'menuContent': {
        templateUrl: 'templates/tours.html',
        controller: 'ToursCtrl'
      }
    }
  })

  .state('app.tour', {
    url: '/tours/:tourId',
    views: {
      'menuContent': {
        templateUrl: 'templates/tour.html',
        controller: 'TourCtrl'
      }
    }
  })

  .state('app.locations', {
    url: '/locations',
    views: {
      'menuContent': {
        templateUrl: 'templates/locations.html',
        controller: 'LocationsCtrl'
      }
    }
  })

  .state('app.location', {
    url: '/locations/:locationId',
    views: {
      'menuContent': {
        templateUrl: 'templates/location.html',
        controller: 'LocationCtrl'
      }
    }
  })
  
  .state('app.location-description', {
    url: '/location/description',
    views: {
      'menuContent': {
        templateUrl: 'templates/location/description.html'
      }
    }
  })

  .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl'
      }
    }
  })

  .state('app.inner-map', {
    url: '/inner-map/:mpId',
    views: {
      'menuContent': {
        templateUrl: 'templates/location/inner-map.html',
        controller: 'innerMapCtrl'
      }
    }
  })

  .state('app.inner-location', {
    url: '/inner-location/:lcId',
    views: {
      'menuContent': {
        templateUrl: 'templates/location/inner-location.html',
        controller: 'innerLocationCtrl'
      }
    }
  })

  .state('app.quest', {
    url: '/quest/:questId',
    views: {
      'menuContent': {
        templateUrl: 'templates/quest.html',
        controller: 'QuestCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');

  uiGmapGoogleMapApiProvider.configure({
      libraries: 'geometry,visualization'
  });

  
  $translateProvider.translations('en', {
      hello_message: "Howdy",
      goodbye_message: "Goodbye"
  });
  $translateProvider.translations('es', {
      hello_message: "Hola",
      goodbye_message: "Adios"
  });
  $translateProvider.preferredLanguage("en");
  $translateProvider.fallbackLanguage("en");
})

.run(function($ionicPlatform, $rootScope, $translate) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    cordova.getAppVersion(function(version) {
        appVersion = version;
    });

    if(typeof navigator.globalization !== "undefined") {
        navigator.globalization.getPreferredLanguage(function(language) {
            $translate.use((language.value).split("-")[0]).then(function(data) {
                console.log("SUCCESS -> " + data);
            }, function(error) {
                console.log("ERROR -> " + error);
            });
        }, null);
    }
  });
})

.directive('compile',function($compile, $timeout){
    return{
        restrict:'A',
        link: function(scope,elem,attrs){
            $timeout(function(){
                
            $compile(elem.contents())(scope);    
            });
        }
        
    }
});
