angular.module('food-bank.controllers', [])

// In your controllers: 
// - `ionicMaterialInk.displayEffect()` (will need to happen once on controller activation and then repeat every time the objects update)
// - `ionicMaterialMotion.ripple()` (etc.)

.controller('NewsFeedCtrl', function($scope, $state, $location, $http, $ionicPopup, Newsposts, ionicMaterialInk) {
  $http.get("http://foodbank.herokuapp.com/newsposts.json")
  .success(function(response) {
   Newsposts.all(response);
 }.bind(this));

  $scope.goToBlog = function() {
    $state.go('blog');
  };
  ionicMaterialInk
})

.controller('MapCtrl', function($scope, $state, $location, ionicMaterialInk) {
  $scope.goToBlog = function() {
    $state.go('blog');
  };
  ionicMaterialInk.displayEffect();
})

.controller('MoreCtrl', function($scope, $state, $location, $ionicPopup, ionicMaterialInk) {
  $scope.goToBlog = function() {
    $state.go('blog');
  }
  $scope.goToNotifications = function() {
    $state.go('notifications');
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
})

.controller('BlogCtrl', function($scope, $state, $location, $ionicPopup, ionicMaterialInk) {
  ionicMaterialInk.displayEffect();
})

.controller('NotificationCtrl', function($scope, $state, $location, $ionicPopup, ionicMaterialInk) {
  ionicMaterialInk.displayEffect();
});