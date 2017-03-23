app.controller("profileCtrl", function($q, $http, $scope, $rootScope, $location, AuthFactory, profileFactory) {
    var uid = AuthFactory.getUser();

		// $scope.thing;
		$scope.thing = profileFactory.userInterestsRef()

		console.log(uid);
		//
    if ($scope.currentUser !== null) {

				$scope.testThis = () => {
					console.log(profileFactory.userInterestsRef());

				}

			// var userInterestsRef = firebase.database().ref('userInterests/' + uid + "/myInterests").on('value', function(snapshot) {
			// 	$rootScope.things = snapshot.val();
			// })
			// console.log($rootScope.userObj);
		} else {
      $location.url('/');
      alert('User must be logged in');
    }

});
