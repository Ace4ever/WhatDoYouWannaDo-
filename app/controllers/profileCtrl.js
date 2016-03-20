app.controller("profileCtrl", ["$q", "$http", "$scope", "$firebaseArray", "getSet", "location",
	function($q, $http, $scope, $firebaseArray, getSet, location) {
	var uid = getSet.getUid();

	var ref = new Firebase("https://justpick.firebaseio.com/userInterests/" + uid + "/myInterests");

 	var userRef = new Firebase("https://justpick.firebaseio.com/users");

  	console.log(uid);

  	console.log(ref);

  	$scope.myInterest = $firebaseArray(ref);


  	$scope.myInterest.$loaded()
  	.then(function(){
  		console.log("IS THIS WORKING??", $scope.myInterest);
  	});


	$scope.saveChanges = function () {
		if($("#fName") !== "" && $("#lName") !== "" && $("#fName") !== undefined && $("#lName") !== undefined){
			$("#savedChanges").modal();

			var currentUserId = getSet.getUid();

			userRef.child("/"+currentUserId).update({
				"firstName": $("#fName").val(),
				"lastName": $("#lName").val()
			});

			 } else {
				console.log("you gotta enter info");
			}
			$scope.userName = $("#fName").val() + $("#lName").val();

	};

	// Function to delete interestes from user profile and firebase

	$scope.deleteInterests = function (clickedValue) {

		var ref = new Firebase("https://justpick.firebaseio.com/userInterests/" + uid + "/myInterests");

		ref.child().remove();

		ref.update({

		}, function(error, userData){
					if (error) {
						alert(error);
					} else {
						console.log("on firebase");
					}
		});
	};

}]);
