angular.module('starter.controllers').controller('QuestCtrl', ['$scope', '$ionicModal', '$sce','$http', '$stateParams', '$ionicLoading', function ($scope, $ionicModal, $sce, $http, $stateParams, $ionicLoading) {
  	
  console.log($stateParams);

  var currentInLocationID = parseInt($stateParams.questId.slice(5));
  console.log(currentInLocationID)

  $http({method: 'GET', url: 'http://gid.areyoualive.ru/api/quests.php?questID=' + currentInLocationID })
  .then(function successCallback(response) {

    $scope.CurrenHTML = $sce.trustAsHtml(response.data[0].question.replace(/[{][\S]{0,}[\s]{0,}[\S]{0,}[\s]{0,}[\S]{0,}[\s]{0,}[}]/g,qmaxParser));
  })

  $scope.resulting = "";
  $scope.showSelectValues = function(mySelect) {
    console.log(mySelect);
    result = 0;
    for (i = 0; i < mySelect.length; i++) {
      if (mySelect[i] == 'true') {
        console.log('true');
        result++;
      };
    }
    percent = (result/mySelect.length)*100;
    //if (mySelect.length == 0) percent = 0;
    if (percent == 100) {
      $scope.resulting = 'You\'re good.<br /> All answers are right!!!';
    } else if (percent > 75) {
      $scope.resulting = 'Almoust perfect.' + Number(percent).toFixed(2) + '% answers are right';
    } else if (percent > 50) {
      $scope.resulting = 'Not bad.<br />' + Number(percent).toFixed(2) + '% answers are right';
    } else if (percent > 25) {
      $scope.resulting = 'You can do it better.' + Number(percent).toFixed(2) + '% answers are right';
    } else {
      $scope.resulting = 'You fail this quest.' + Number(percent).toFixed(2) + '% answers are right';
    }
  }
  var currentID = 0;
  $scope.inputs = [];
	function qmaxParser(str){
			str = str.substr(1,str.length-2); // Separate { }
			var variants = str.split(','); // Separate each variant
			
			var output = '<label class="item item-input item-select" ng-class="qmax'+currentID+'class"> 	\
	                    <div class="input-label">	\
	                        &nbsp;	\
	                    </div>	\
	                    <select ng-model="inputs['+currentID+']" > \
						';
					
			for(var i = 0; i < variants.length; i++){
				var currentVariant = variants[i].trim();
				var currentValue = false;
				if(currentVariant[0]=='*'){ 
					currentValue = true; 
					currentVariant = currentVariant.substr(1);// remove *
				}else {
					currentValue = false;
				}
				
				output += '<option value="'+currentValue+'">'+currentVariant+'</option>';	
					
			}
			output += '</select>	\
	                </label>';
      currentID++;
		return output;
	}




  
  // $scope.questions = [
  //   { 'question': 'Text question', 
  //     'answers': ['first', 'second', 'third', 'fourth'], 
  //     'rightAnsw': 1, 
  //     'type': 1},
  //   { 'question': 'Text question', 
  //     'answers': ['first', 'second', 'third', 'fourth'], 
  //     'rightAnsw': 1, 
  //     'type': 1},
  //   { 'question': 'http://cs935.vk.me/u3357280/24443421/x_d627df82.jpg', 
  //     'answers': ['first', 'second', 'third', 'fourth'], 
  //     'rightAnsw': 3, 
  //     'type': 2},
  //   { 'question': 'Text question type 3', 
  //     'answers': [ 'http://cs935.vk.me/u3357280/24443421/x_d627df82.jpg ', 'http://cs935.vk.me/u3357280/24443421/x_d627df82.jpg', 'third', 'fourth'], 
  //     'rightAnsw': 3, 
  //     'type': 3}                     
  // ];



  // $ionicModal.fromTemplateUrl('image-quest-modal.html', {
    // scope: $scope,
    // animation: 'slide-in-up'
  // }).then(function(modal) {
    // $scope.modal = modal;
  // });

  // $scope.submitAnswer=function(){
  //   console.log($scope.questions);
  // }

  // $scope.slideLeft = function() {
  //   var current_index = $scope.loctn.photo.indexOf($scope.imageSrc);
  //   current_index--;
    
  //   if(current_index < 0) current_index = $scope.loctn.photo.length-1;
    
  //   $scope.imageSrc = $scope.loctn.photo[current_index];
  //   };
  
  // $scope.slideRight = function() {
  //   var current_index = $scope.loctn.photo.indexOf($scope.imageSrc);
  //   current_index++;
    
  //   if(current_index >=$scope.loctn.photo.length) current_index = 0;
    
  //   $scope.imageSrc = $scope.loctn.photo[current_index];
  // };
  
  // $scope.openModal = function() {
  //   $scope.modal.show();
  // };

  // $scope.closeModal = function() {
  //   $scope.modal.hide();
  // };

  // //Cleanup the modal when we're done with it!
  // $scope.$on('$destroy', function() {
  //   $scope.modal.remove();
  // });
  // // Execute action on hide modal
  // $scope.$on('modal.hide', function() {
  //   // Execute action
  // });
  // // Execute action on remove modal
  // $scope.$on('modal.removed', function() {
  //   // Execute action
  // });
  // $scope.$on('modal.shown', function(elem) {
  //   console.log('Modal is shown!');
  // });

  // $scope.openImage = function(src) {
  //   $scope.currSrc = src;
  //   $scope.openModal();
  // }
}]);