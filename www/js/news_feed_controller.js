app.controller('NewsFeedCtrl', function($scope, $state, $location, $http, NewsPosts, ionicMaterialInk) {

    ionicMaterialInk.displayEffect();

    var validNewsPosts = [];

    $scope.filterImportantPosts = function(postArray) {
      if (postArray == undefined) {
        return ""
      }
      return postArray.filter(function(post) {
        if (post.tags == undefined) {
          return false;
        }
        post.tags.forEach(function(tag) {
          if (tag.name == "important") {
            return true;
          }
        })
        return false;
      })
    }

    $scope.formatTags = function (tagsArray) {
      if (tagsArray == undefined) {
        return "";
      }

      var filteredString = "";
      for (var i = 0; i < tagsArray.length; i++) {
        filteredString += i.name + " ";
      }
      return filteredString;
    }

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
