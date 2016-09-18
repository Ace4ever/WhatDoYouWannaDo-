"use strict";

app.controller('topCtrl', function($scope, $location, $window, AuthFactory) {
  $scope.isLoggedIn = false;

  let currentUser = null;

  $scope.map = { center: { latitude: 36.16, longitude: -86.78 }, zoom: 12 };

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      currentUser = user.uid;  // ability to edit and pull UID while logged in
      $scope.isLoggedIn = true;
      console.log("Current user logged in?", user.uid);
    } else {
      currentUser = null;  //after logged out removes ability
      $scope.isLoggedIn = false;
      $window.location.href = "#/login";
    }
      $scope.$apply();  // since the change takes place inside a reg function, we have to refresh
  });

  $scope.getUser = () => {
    return currentUser;
  };

  $scope.logout = () => {
    AuthFactory.logoutUser()
    .then(function(data) {
      console.log("logged out", data);
    });
  };

});
