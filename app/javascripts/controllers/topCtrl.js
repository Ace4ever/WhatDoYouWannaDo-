// "use strict";
//
// app.controller('topCtrl', function($scope, $rootScope, $location, $window, AuthFactory) {
//
//   let currentUser = null;
//
//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       currentUser = user.uid;  // ability to edit and pull UID while logged in
//       console.log("Current user logged in?", user.uid);
//     } else {
//       currentUser = null;  //after logged out removes ability
//       $window.location.href = "#/login";
//     }
//       $scope.$apply();  // since the change takes place inside a reg function, we have to refresh
//   });
//
//   $scope.getUser = function () {
//     return currentUser;
//   };
// });
