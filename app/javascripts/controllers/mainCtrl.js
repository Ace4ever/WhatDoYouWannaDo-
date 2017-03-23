app.controller("mainCtrl", function($q, $http, $scope, AuthFactory, SearchGoogleAPI) {

		$scope.currentUser =  AuthFactory.getUser();

		console.log($scope.currentUser);

		$scope.usersZipCode;
		$scope.selectedTypes;
		$scope.activity;
		$scope.radius;
		$scope.checkedActivities = [];
		$('#zeroResults').hide();

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

			$scope.checked = {
		    placeName: []
		  };

			$scope.showResult = function () {
				console.log('CHECKING TEST', $scope.checked.placeName);
				if ($scope.checked.placeName !== []) {
					$("#resultModal").modal();
					$scope.selected = $scope.checked.placeName[Math.floor(Math.random() * $scope.checked.placeName.length)];
					console.log($scope.selected);
				} else {
					alert("Please make some selections");
				}
			};

			$scope.saveInterests = function () {
				console.log('HELLO PEOPLE WHAT IS HAPPENING')
				$("#savedModal").modal();
				$scope.thisUsersInterests = $scope.checked.placeName;
				var uid = $scope.currentUser;
				var userInterestsRef = firebase.database().ref('userInterests')
				console.log("thisUsersInterests", $scope.thisUsersInterests);
				userInterestsRef.child("/"+uid).set({
					myInterests: $scope.thisUsersInterests
				});
				console.log("THIS HAS BEEN SAVED!");
			};
	}


	});
