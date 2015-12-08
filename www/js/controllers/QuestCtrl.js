angular.module('starter.controllers').controller('QuestCtrl', ['$scope', '$ionicModal', '$sce','$http', '$stateParams', '$ionicLoading', function ($scope, $ionicModal, $sce, $http, $stateParams, $ionicLoading) {

  console.log($stateParams);

  var currentInLocationID = parseInt($stateParams.questId.slice(5));
  console.log(currentInLocationID)

  $http({method: 'GET', url: 'http://gid.areyoualive.ru/api/quests.php?questID=' + currentInLocationID })
  .then(function successCallback(response) {

    $scope.CurrenHTML = response.data[0].question.replace(/[{][\S]{0,}[\s]{0,}[\S]{0,}[\s]{0,}[\S]{0,}[\s]{0,}[}]/g,qmaxParser);
  })

  $scope.resulting = "";
  $scope.showSelectValues = function(mySelect) {
    result = 0;
    for (i = 0; i < mySelect.length; i++) {
      if (mySelect[i] == 'true') {
        console.log('true');
        result++;
      };
    }
    percent = (result/mySelect.length)*100;
    if (mySelect.length == 0) percent = 0;
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

}])
.directive('questionBox',function($compile){
    return{
        link: function (scope, ele, attrs) {
        scope.$watch(attrs.questionBox, function(html) {
          ele.html(html);
          $compile(ele.contents())(scope);
        });
      }

    }
});
