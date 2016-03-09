app.controller("profileCtrl", ["$q", "$http", "$scope", "$firebaseArray", "getSet", "location",
	function($q, $http, $scope, $firebaseArray, getSet, location) {	
	var uid = getSet.getUid()
  	var ref = new Firebase("https://justpick.firebaseio.com/userInterests/" + uid + "/myInterests");

 	var userRef = new Firebase("https://justpick.firebaseio.com/users");
  	
  	console.log(uid);

  	console.log(ref);


  	// var testing = $firebaseArray(ref);

  	$scope.myInterest = $firebaseArray(ref);
  	// console.log("WHAT IS THIS THING??????", $scope.myInterest)
  	// console.log("testing", testing);
  	
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

		 }else {
			console.log("you gotta enter info");
		}
		$scope.userName = $("#fName").val() + $("#lName").val();

	};

	$scope.deleteInterests = function () {
		$("#removeInterest").remove();

		var ref = new Firebase("https://justpick.firebaseio.com/userInterests/" + uid + "/myInterests");

		ref.update({
			
				}, function(error, userData){
					if (error) {
						alert(error);
					} else {
						console.log("on firebase");
					}
		});
	}

   	// console.log(testing);

}]);