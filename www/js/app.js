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
        templateUrl: 'templates/quest.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');

  uiGmapGoogleMapApiProvider.configure({
      libraries: 'geometry,visualization'
  });
  
  $translateProvider.translations('en', {
      home: "Home",
      tours: "Tours",
      locations: "Locations",
      about: "About",
      language: "Language",
      choose_lang: "Choose language:",
      close: "Close",
      menu: "Menu",
      loading: "Loading...",
      backBtn: "Back",
      read_more: "Read more",
      look_inside: "Look inside",
      contact_inf: "Contacts information",
      visit_hours: "Visiting hours",
      test_yourself: "Test yourself",
      version: "Version",
      about_text: "Application developed by Ukrainian and Germany teams.",
      full_about: "Full about page",
      main_plan: "Main plan"

  });
  $translateProvider.translations('ru', {
      home: "Головна сторінка",
      tours: "Тури",
      locations: "Локації",
      about: "О нас",
      language: "Зміна мови",
      choose_lang: "Оберіть мову:",
      close: "Закрити",
      menu: "Меню",
      loading: "Завантаження...",
      backBtn: "Назад",
      read_more: "Читати далі",
      look_inside: "Оглянути з середини",
      contact_inf: "Контактна інформація",
      visit_hours: "Часи роботи",
      test_yourself: "Перевір себе",
      version: "Версія",
      about_text: "Додаток розроблено українською та німецькою командами.",
      full_about: "Переглянути повну сторінку",
      main_plan: "План будівлі"
  });
  $translateProvider.preferredLanguage(window.localStorage.getItem('lang'));
  $translateProvider.fallbackLanguage(window.localStorage.getItem('lang'));
})

.run(function($ionicPlatform, $rootScope, $translate) {

  $translate.use(window.localStorage.getItem('lang'));

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
  });
});
