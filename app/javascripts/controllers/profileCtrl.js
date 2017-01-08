app.controller("profileCtrl", ["$q", "$http", "$scope", "$location", "AuthFactory",
	function($q, $http, $scope, $location, AuthFactory) {
    var uid = AuthFactory.getUser();

		console.log(uid);
		//
    if ($scope.currentUser !== null) {
			var userInterestsRef = firebase.database().ref('userInterests/' + uid + "/myInterests").on('value', function myFunction(snapshot) {
				snapshot.val();
				return snapshot
			})
			console.log(snapshot);
		} else {
      $location.url('/');
      alert('User must be logged in');
    }

}]);
