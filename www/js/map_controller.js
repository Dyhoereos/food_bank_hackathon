app.controller('MapCtrl', function($scope, $state, $location, $http, ionicMaterialInk, NewsPosts) {
  $http.get("http://foodbank.herokuapp.com/newsposts.json")
  .success(function(response) {
   validNewsPosts = NewsPosts.all(response);
  }.bind(this));

  $scope.goToBlog = function() {
    $state.go('blog');
  };

  ionicMaterialInk.displayEffect();
});
