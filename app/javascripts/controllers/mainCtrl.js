app.controller("mainCtrl", ["$q", "$http", "$scope", "AuthFactory", "SearchGoogleAPI",
	function($q, $http, $scope, AuthFactory, SearchGoogleAPI) {



		$scope.usersZipCode;

    $scope.currentUser = AuthFactory.getUser();
    $('#profileLink').removeClass('ng-hide');
    $('#mainPageLink').removeClass('ng-hide');
    $('#logoutLink').removeClass('ng-hide');


    if ($scope.currentUser !== null) {
      $('.modal-trigger').leanModal();
      console.log('user logged in??', $scope.usersZipCode);
			$scope.searchForLocation = () => {
				$scope.placeName = [];
				$scope.locationArray = [];
				$scope.myLocation = [];
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
					SearchGoogleAPI.getSearchResults($scope.myLocation)
					.then((data2) => {
						$scope.searchResults = data2.results;
						console.log($scope.searchResults);
						for (var i = 0; i < $scope.searchResults.length; i++) {
							$scope.placeName.push($scope.searchResults[i].name);
						}
						console.log($scope.placeName);
					})
			})
		}
	}
	// 	$scope.currentUserId = getSet.getUid();
  //
	// 	$scope.loginEmail;
	// 	$scope.loginPassword;
	// 	$scope.interstsToSearch;
  //
		// var ref = new Firebase("https://justpick.firebaseio.com/users");
	// 	var interestsRef = new Firebase("https://justpick.firebaseio.com/interests");
	// 	var interestsArray = $firebaseArray(interestsRef);
	// 	var userInterestsRef = new Firebase("https://justpick.firebaseio.com/userInterests");
	// 	var userInterestsArray = $firebaseArray(userInterestsRef);
  //
  //
	// 	// set checklist & display to dom
  //
	// 	interestsArray.$loaded()
	// 	.then(function(data){
			  $scope.types = [
					'restaurant',
					'food',
					'department_store',
					'bowling_alley',
			    'amusement_park',
			    'aquarium',
			    'zoo'
			  ];
  //
  //
	// 		  $scope.user = {
	// 		  	roles: []
	// 		  };
  //
	// 	});
  //
	// 	// function that randomly generates result from usere's selected interests and displays result modal
  //
	// 	$scope.showResult = function () {
	// 		if ($scope.user.roles !== []) {
	// 			console.log($scope.user.roles);
	// 		$("#resultModal").modal();
  //
	// 		$scope.selected = $scope.user.roles[Math.floor(Math.random() * $scope.user.roles.length)];
	// 		console.log($scope.selected);
	// 	}else {
	// 		console.log("Please make some selections");
	// 	}
	// 	};
  //
	// 	// function that saves user's interests in FB and notifies them of what they've saved in modal
  //
	// 	$scope.saveInterests = function () {
	// 		$("#savedModal").modal();
  //
	// 		var currentUserId = getSet.getUid();
	// 		var thisUsersInterests = $scope.user.roles;
	// 		console.log("thisUsersInterests", thisUsersInterests);
	// 		userInterestsRef.child("/"+currentUserId).set({
	// 			"myInterests": thisUsersInterests
  //
	// 		});
  //
	// 		console.log("THIS HAS BEEN SAVED!", currentUserId);
	// 	};

	}]);
