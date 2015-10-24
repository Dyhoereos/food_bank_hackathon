app.controller('NewsFeedCtrl', function($scope, $state, $location, $http, Newsposts, ionicMaterialInk) {
  var validNewsposts = [];

  var refreshNewsPage = function (validNewsposts) {
    return 0;
  };

  $http.get("http://foodbank.herokuapp.com/newsposts.json")
  .then(function(response) {
   validNewsposts = Newsposts.all(response);
   refreshNewsPage(validNewsposts);
   }.bind(this), function() {
    validNewsposts = Newsposts.fail();
    refreshNewsPage(validNewsposts);
  }.bind(this));

  $scope.goToBlog = function() {
    $state.go('blog');
  };

  ionicMaterialInk.displayEffect();
});