app.controller('MapCtrl', function($scope, $state, $location, $http, foodbankLocations, ionicMaterialInk, uiGmapGoogleMapApi) {
  // $http.get("http://foodbank.herokuapp.com/newsposts.json")
  // .success(function(response) {
  //  validNewsPosts = NewsPosts.all(response);
  // }.bind(this));

    $http.get("http://foodbank.herokuapp.com/locations.json").then(function(response) {
        $scope.foodbankLocations = foodbankLocations.all(response.data);

    }.bind(this), function() {
        foodbankLocations = foodbankLocations.fail();
        
    }.bind(this));

  $scope.myLocation = {
    lng : '',
    lat: ''
  }

  $scope.drawMap = function(position) {
 
    //$scope.$apply is needed to trigger the digest cycle when the geolocation arrives and to update all the watchers
    $scope.$apply(function() {
      $scope.myLocation.lng = position.coords.longitude;
      $scope.myLocation.lat = position.coords.latitude;
 
      $scope.map = {
        center: {
          latitude: $scope.myLocation.lat,
          longitude: $scope.myLocation.lng
        },
        zoom: 14,
        pan: 1
      };
 
      $scope.marker = {
        id: 0,
        coords: {
          latitude: $scope.myLocation.lat,
          longitude: $scope.myLocation.lng
        }
      }; 
       
      $scope.marker.options = {
        draggable: false,
        labelContent: "lat: " + $scope.marker.coords.latitude + '<br/> ' + 'lon: ' + $scope.marker.coords.longitude,
        labelAnchor: "80 120",
        labelClass: "marker-labels"
      };  
    });
  }
 
  navigator.geolocation.getCurrentPosition($scope.drawMap);
});