angular.module('starter.controllers').controller('QuestCtrl', function($scope, $http, $stateParams, $ionicLoading) {
  	
  console.log($stateParams);

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
    { 'question': 'http://cs935.vk.me/u3357280/24443421/x_d627df82.jpg', 
      'answers': [ 'http://cs935.vk.me/u3357280/24443421/x_d627df82.jpg ', 'http://cs935.vk.me/u3357280/24443421/x_d627df82.jpg', 'third', 'fourth'], 
      'rightAnsw': 3, 
      'type': 3}                     
  ];

});