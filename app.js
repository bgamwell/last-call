var app = angular.module('lastCallApp', ['ngMap', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'templates/bars.html',
          controller: 'BarPinsCtrl'
        });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);

// Drop many pins at once
app.controller('BarPinsCtrl', ['$scope', '$timeout', '$http', function($scope, $timeout, $http) {
  $scope.image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    size: [20, 32],
    origin: [0,0],
    anchor: [0, 32]
  };

  var castro = new google.maps.LatLng(37.765909, -122.430985);
  $scope.clickCastro = function() {
    $scope.map.setCenter(castro);
    $scope.map.setZoom(16);
  };

  var soma = new google.maps.LatLng(37.773625, -122.411774);
  $scope.clickSoMa = function() {
    $scope.map.setCenter(soma);
    $scope.map.setZoom(16);
  };

  $http.get('https://api.foursquare.com/v2/venues/search?categoryId=4bf58dd8d48988d1d8941735&near=San_Francisco,CA&limit=50&client_id=F0C3XEK1WU1ONFBX5DZPE3FK3XK224Q2VV0HRKFY2UFAY45Q&client_secret=LWOZYT1HB4555JUYZIJBTVDNNUL3ZY2SZCCE5FMIV2TRP0CN&v=20150806')
        .then(function (response) {
          console.log(response.data.response.venues);
          $scope.bars = response.data.response.venues;
        });

  // $scope.bars = [
  //   {'id': 1, name: 'Powerhouse', lat: 37.7730761, lng: -122.4121004, description: ''},
  //   {'id': 2, name: 'Castro Theatre', lat: 37.7620377, lng: -122.4346968, description: ''},
  //   {'id': 3, name: 'Badlands', lat: 37.7607011, lng: -122.4354564, description: ''},
  //   {'id': 4, name: '440 Castro', lat: 37.7618428, lng: -122.4353514, description: ''},
  //   {'id': 5, name: 'The Cafe', lat: 37.7627891, lng: -122.4343241, description: ''},
  //   {'id': 6, name: 'Q Bar', lat: 37.7616213, lng: -122.4352878, description: ''},
  //   {'id': 7, name: 'Moby Dick', lat: 37.7608172, lng: -122.4336979, description: ''},
  //   {'id': 8, name: 'The Edge', lat: 37.7608172, lng: -122.4336979, description: ''},
  //   {'id': 9, name: 'Midnight Sun', lat: 37.7607688, lng: -122.482758, description: ''},
  //   {'id': 10, name: 'Lookout', lat: 37.764383, lng: -122.4334021, description: ''},
  //   {'id': 11, name: 'Lone Star Saloon', lat: 37.7721444, lng: -122.4108652, description: ''},
  //   {'id': 12, name: 'The Mix', lat: 37.7610948, lng: -122.4345455, description: ''},
  //   {'id': 13, name: 'Toad Hall', lat: 37.7609714, lng: -122.4357522, description: ''},
  //   {'id': 14, name: 'Twin Peaks Tavern', lat: 37.7623731, lng: -122.4349194, description: ''},
  //   {'id': 15, name: 'El Rio', lat: 37.7467935, lng: -122.4194204, description: ''},
  //   {'id': 16, name: 'Pilsner Inn', lat: 37.7671169, lng: -122.4287035, description: ''},
  //   {'id': 17, name: 'The Stud', lat: 37.7728278, lng: -122.410002, description: ''},
  //   {'id': 18, name: 'SF Eagle', lat: 37.7700044, lng: -122.4133666, description: ''},
  //   {'id': 19, name: 'Hole in the Wall Saloon', lat: 37.7729582, lng: -122.4123879, description: ''},
  //   {'id': 20, name: 'Underground SF', lat: 37.7724118, lng: -122.4293812, description: ''},
  //   // {'id': 21, name: "Aunt Charlie's Lounge", lat: 37.7829004, lng: -122.4113768, description: ''},
  //   {'id': 22, name: 'The Cinch Saloon', lat: 37.7927352, lng: -122.4215355, description: ''},
  //   {'id': 23, name: 'Hi Tops', lat: 37.7649285, lng: -122.4317197, description: ''},
  //   {'id': 24, name: 'Trax', lat: 37.7700047, lng: -122.4460374, description: ''},
  //   {'id': 25, name: 'Beaux', lat: 37.7700047, lng: -122.4460374, description: ''},
  //   {'id': 26, name: 'BeatBox', lat: 37.7714872, lng: -122.413929, description: ''},
  //   {'id': 27, name: 'Last Call', lat: 37.7714872, lng: -122.413929, description: ''},
  //   {'id': 28, name: 'Gangway', lat: 37.7858289, lng: -122.4183209, description: ''},
  //   {'id': 29, name: 'OMG!', lat: 37.7858289, lng: -122.4183209, description: ''},
  //   {'id': 30, name: 'Oasis', lat: 37.7746696, lng: -122.4166472, description: ''}
  // ];

}]);
