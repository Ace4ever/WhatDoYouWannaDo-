app.controller("profileCtrl", ["$q", "$http", "$scope", "$location", "AuthFactory",
	function($q, $http, $scope, $location, AuthFactory) {
    $scope.currentUser = AuthFactory.getUser();
    $('#profileLink').removeClass('ng-hide');
    $('#mainPageLink').removeClass('ng-hide');
    $('#logoutLink').removeClass('ng-hide');
    
    if ($scope.currentUser !== null) {
      console.log('user logged in??', $scope.currentUser);
    } else {
      $location.url('/');
      alert('User must be logged in');
    }
//
// 	var ref = new Firebase("https://justpick.firebaseio.com/userInterests/" + uid + "/myInterests");
//
//  	var userRef = new Firebase("https://justpick.firebaseio.com/users");
//
//   	console.log('User ID', uid);
//
//   	// console.log(ref);
//
//   	$scope.myInterest = $firebaseArray(ref);
//
//
//   	$scope.myInterest.$loaded()
//   	.then(function(){
//   		console.log("IS THIS WORKING??", $scope.myInterest);
//   	});
//
//
// 		$scope.saveChanges = function () {
//     	var firstN = $("#fName").val();
//       var lastN = $("#lName").val();
//       if(firstN !== "" && lastN !== "" && firstN !== undefined && lastN !== undefined){
//         $("#savedChanges").modal();
//
//         var currentUserId = getSet.getUid();
// 				console.log(currentUserId);
//
// 	      userRef.child("/"+currentUserId).update({
//           "firstName": firstN,
//           "lastName": lastN
//         });
//       } else {
//           console.log("you gotta enter info");
//         }
//
//       $scope.userName = firstN + lastN;
//     };
//
// 	// Function to delete interestes from user profile and firebase
//
// 	$scope.deleteInterests = function (clickedValue) {
//
// 		var ref = new Firebase("https://justpick.firebaseio.com/userInterests/" + uid + "/myInterests");
//
// 		console.log($(this));
//
// 		$(this).remove('div');
// 		console.log('????', uid);
// 		ref.update({
//
//
// 		}, function(error, userData){
// 					if (error) {
// 						alert(error);
// 					} else {
// 						console.log("on firebase", userData);
// 					}
// 		});
	// };

}]);
