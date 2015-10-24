app.controller('MapCtrl', function($scope, $state, $location, $http, ionicMaterialInk) {
  $http.get("http://foodbank.herokuapp.com/newsposts.json")
  .success(function(response) {
   validNewsposts = Newsposts.all(response);
  }.bind(this));

  $scope.goToBlog = function() {
    $state.go('blog');
  };

  ionicMaterialInk.displayEffect();
});
