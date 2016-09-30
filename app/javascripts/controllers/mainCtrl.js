app.controller("mainCtrl", ["$q", "$http", "$scope", "AuthFactory", "SearchGoogleAPI",
	function($q, $http, $scope, AuthFactory, SearchGoogleAPI) {

		$scope.usersZipCode;
		$scope.selectedTypes;
		$scope.activity;
		$scope.radius;
		$scope.checkedActivities = [];
		$('#zeroResults').hide();


    $('#profileLink').removeClass('ng-hide');
    $('#mainPageLink').removeClass('ng-hide');
    $('#logoutLink').removeClass('ng-hide');

    if ($scope.currentUser !== null) {
      $('.modal-trigger').leanModal();
			$('#typeDropdown').change(function () {
				$scope.activity = this.value;
				console.log($scope.activity)
			});
			$('#radiusDropdown').change(function () {
				$scope.radius = this.value;
				console.log($scope.radius)
			});
      console.log('user logged in??');
			$scope.searchForLocation = () => {
				$scope.placeName = [];
				$scope.locationArray = [];
				$scope.myLocation = [];
				console.log('selectedTypes', $scope.selectedTypes);
				SearchGoogleAPI.gettingLocation($scope.usersZipCode)
				.then((data) => {
					$scope.locationResults = data.results;
					for (var i = 0; i < $scope.locationResults.length; i++) {
						$scope.locationArray.push($scope.locationResults[i]);
						$scope.myLatitude = $scope.locationArray[0].geometry.location.lat;
						$scope.myLongitude = $scope.locationArray[0].geometry.location.lng;
						$scope.myLocation.push($scope.myLatitude, $scope.myLongitude)
						console.log('TESTING LAT LOCATION', $scope.myLocation)
					}
					SearchGoogleAPI.getSearchResults($scope.myLocation, $scope.activity, $scope.radius)
					.then((data2) => {
						if (data2.status !== "ZERO_RESULTS") {
							$('#zeroResults').hide();
							$scope.searchResults = data2.results;
							console.log($scope.searchResults);
							for (var i = 0; i < $scope.searchResults.length; i++) {
								$scope.placeName.push($scope.searchResults[i].name);
							}
						} else {
							$('#zeroResults').show();
						}
						console.log($scope.placeName);
					})
			})
		}



			// $.each($('input[type="checkbox"]:checked'), function (key, value) {
			// 		$scope.checkedActivities.push($(value).attr("name"));
			// 		console.log('CHECKED VALES', $scope.checkedActivities);
			// 	});
				$scope.showResult = function () {
				// if ($scope.checkedActivities !== []) {
				// 	console.log($scope.checkedActivities);
				$("#resultModal").modal();

			// 	$scope.selected = $scope.checkedActivities[Math.floor(Math.random() * $scope.checkedActivities.length)];
			// 	console.log($scope.selected);
			// }else {
			// 	console.log("Please make some selections");
			// }
			};

		// $scope.saveInterests = function () {
		// 	$("#savedModal").modal();
		//
		// 	var currentUserId = getSet.getUid();
		// 	var thisUsersInterests = $scope.checkedActivities;
		// 	console.log("thisUsersInterests", thisUsersInterests);
		// 	userInterestsRef.child("/"+currentUserId).set({
		// 		"myInterests": thisUsersInterests
		//
		// 	});
		//
		// 	console.log("THIS HAS BEEN SAVED!", currentUserId);
		// };
	}

	// 	// function that randomly generates result from usere's selected interests and displays result modal
  //

  //
	// 	// function that saves user's interests in FB and notifies them of what they've saved in modal
  //


	}]);
