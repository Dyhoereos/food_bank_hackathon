app.controller('FeedbackCtrl', function($scope, $state, $location, $ionicPopup, ionicMaterialInk) {
  ionicMaterialInk.displayEffect();

  var feedbackType = 'Question';

   $scope.handleFeedback = function() {
    var fullName = $('#nameInput').val();
    var contactInfo = $('#contactInput').val();
    var messageInfo = $('#messageInput').val();

    if (messageInfo === "") {
    	var alertPopup = $ionicPopup.alert({
            title: 'Empty Message Error',
            template: 'Please enter a feedback message'
        });
        return 0;
    }

    var feedback = {category: feedbackType, name: fullName, contact: contactInfo, message: messageInfo};

    return 0;
  }

  $scope.selectQuestion = function() {
  	feedbackType = 'Question';
  	$('.selectedCategory').removeClass('selectedCategory');
  	$('#questionButton').addClass('selectedCategory');
  }

  $scope.selectProblem = function() {
  	feedbackType = 'Problem';
  	$('.selectedCategory').removeClass('selectedCategory');
  	$('#problemButton').addClass('selectedCategory');
  }

  $scope.selectPraise = function() {
  	feedbackType = 'Praise';
  	$('.selectedCategory').removeClass('selectedCategory');
  	$('#praiseButton').addClass('selectedCategory');
  }

  $scope.selectIdea = function() {
  	feedbackType = 'Idea';
  	$('.selectedCategory').removeClass('selectedCategory');
  	$('#ideaButton').addClass('selectedCategory');
  }

})