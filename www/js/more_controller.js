app.controller('MoreCtrl', function($scope, $state, $location, $ionicPopup, ionicMaterialInk) {
  $scope.goToBlog = function() {
    $state.go('blog');
  }
  $scope.goToNotifications = function() {
    $state.go('notifications');
  }

  $scope.goToAbout = function() {
    $state.go('about');
  }

  var feedback_content = "Example Feedback content";

  $scope.feedback = function() {
    var alert = $ionicPopup.alert({
      title: 'Feedback Form',
      template: 'Here is some content that goes into the feedback form',
      buttons: [
      {
        text:'Send Feedback', onTap: function(e) {
          feedback_content = "The actual feedback content";
          return true;
        }
      }
      ]
    })
  }
  ionicMaterialInk.displayEffect();
});
