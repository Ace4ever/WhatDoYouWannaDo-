app.factory("location", ["$q", "$http",
  function($q, $http) {

  	// var google = keys.getLocation();
  	// console.log("???????", keys.getLocation());

  	return {
  		searchArea: function(userLocation){
  			var userZip = $("#userZip").val();
  			console.log(userZip);
  			return $q(function (resolve, reject){
  			$http({
			  method: 'GET',
			  url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + userZip + 'types=food&radius=5&apikey=AIzaSyCV2o3mgi_VkYH2iSVtKfOgagTrLEorJLE'
			}).then(function (response) {
				console.log("AM I HERE???");
			    // this callback will be called asynchronously
			    // when the response is available
			  }, function (error) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
		});
  		}
  	};


}]);
