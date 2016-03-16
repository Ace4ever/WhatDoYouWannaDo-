app.controller("mainCtrl", ["$q", "$http", "$scope", "$firebaseArray", "getSet", "location",
	function($q, $http, $scope, $firebaseArray, getSet, location) {

		$scope.loginEmail;
		$scope.loginPassword;

		var ref = new Firebase("https://justpick.firebaseio.com/users");
		var interestsRef = new Firebase("https://justpick.firebaseio.com/interests");
		var interestsArray = $firebaseArray(interestsRef);
		var userInterestsRef = new Firebase("https://justpick.firebaseio.com/userInterests");
		var userInterestsArray = $firebaseArray(userInterestsRef);

		// $("#zipModal").modal();




		// set checklist & display to dom

		interestsArray.$loaded()
		.then(function(data){
			  $scope.interests = [
					'dancing',
					'dining',
					'mini golf',
					'bowling',
			    'shopping',
			    'movie',
			    'skating',
			    'swimming',
			    'skiing',
			    'hiking',
			    'ice skating',
			    'ping pong',
			    'shoot hoops',
			    'kareoke',
			    'fishing'
			  ];


			  $scope.user = {
			  	roles: []
			  };

		});

		// function that randomly generates result from usere's selected interests and displays result modal

		$scope.showResult = function () {
			if ($scope.user.roles !== []) {
				console.log($scope.user.roles);
			$("#resultModal").modal();

			$scope.selected = $scope.user.roles[Math.floor(Math.random() * $scope.user.roles.length)];
			console.log($scope.selected);
		}else {
			console.log("Please make some selections");
		}
		};

		// function that saves user's interests in FB and notifies them of what they've saved in modal

		$scope.saveInterests = function () {
			$("#savedModal").modal();

			var currentUserId = getSet.getUid();
			var thisUsersInterests = $scope.user.roles;
			console.log("thisUsersInterests", thisUsersInterests);
			userInterestsRef.child("/"+currentUserId).set({
				"myInterests": thisUsersInterests

			});

			console.log("THIS HAS BEEN SAVED!", currentUserId);
		};

		$scope.findFriends = function() {
			$("#searchFriends").modal();

		};

		$scope.searchZip = function() {
			var testing = location.searchArea();
			testing.then(function(response){

			});
		};

	}]);
