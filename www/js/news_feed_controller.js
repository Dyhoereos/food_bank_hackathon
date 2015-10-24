app.controller('NewsFeedCtrl', function($scope, $state, $location, $http, NewsPosts, ionicMaterialInk) {

    ionicMaterialInk.displayEffect();

    var validNewsPosts = [];

    var refreshNewsPage = function (validNewsPosts) {
        return 0;
    };

    $http.get("http://foodbank.herokuapp.com/newsposts.json").then(function(response) {
        $scope.validNewsPosts = NewsPosts.all(response.data);
        refreshNewsPage(validNewsPosts);

    }.bind(this), function() {
        validNewsPosts = NewsPosts.fail();
        refreshNewsPage(validNewsPosts);

    }.bind(this));

    $scope.goToBlog = function() {
        $state.go('blog');
    };
});
