"use strict";

app.factory("AuthFactory", function() {

  let currentUserId = null;
  // console.log("CUID", currentUserId);

  let isAuthenticated = function() {
    return (currentUserId) ? true : false;
  };

  let getUser = function() {
    return currentUserId;
  // console.log("getUser", getUser);
  };

  let setUser = function(id) {
    currentUserId = id;
    // console.log("CUID", currentUserId);
  };

  let logout = function() {
    currentUserId = null;
  };

  let register = function (email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.warn(errorCode, errorMessage);
    });
  };

  let login = function (email, password) {
    console.log('you are logged in')
    return firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.warn(errorCode, errorMessage);
    });
  };

  return {
    isAuthenticated, getUser, setUser, register, login
    };
});

app.run(["$location", "FBCreds",  "AuthFactory", function ($location, FBCreds, AuthFactory) {
  console.log();
  let authConfig = {
    apiKey: FBCreds.apiKey,
    authDomain: FBCreds.authDomain,
    databaseURL: FBCreds.databaseURL,
    storageBucket: FBCreds.storageBucket,
  };

  firebase.initializeApp(authConfig);

  firebase.auth().onAuthStateChanged(function (user) {
    // console.log(user.uid);
    if (user) {
      AuthFactory.setUser(user.uid);
      $location.url("/");
      // console.log('HELLO');
    } else {
      $location.url("/");
      AuthFactory.setUser(null); //this is to rest the current user to hide board.
    }
  });
}]);
