angular.module('food-bank.controllers', [])

// In your controllers: 
// - `ionicMaterialInk.displayEffect()` (will need to happen once on controller activation and then repeat every time the objects update)
// - `ionicMaterialMotion.ripple()` (etc.)

.controller('NewsFeedCtrl', function($scope, $state, $location) {
  $scope.goToBlog = function() {
    $state.go('blog');
  };
})

.controller('MapCtrl', function($scope, $state, $location) {
  $scope.goToBlog = function() {
    $state.go('blog');
  };
})

.controller('MoreCtrl', function($scope, $state, $location, $ionicPopup, ionicMaterialInk) {
  $scope.goToBlog = function() {
    $state.go('blog');
  };

  ionicMaterialInk.displayEffect();
})

.controller('BlogCtrl', function($scope, $state, $location, $ionicPopup, ionicMaterialInk) {
});
