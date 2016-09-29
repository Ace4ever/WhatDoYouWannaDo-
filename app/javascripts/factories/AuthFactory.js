"use strict";

app.factory("AuthFactory", function() {

  let register = function (userObj) {
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
      .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  };

  let login = function(userObj) {
    return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
    });
  };

  let logout = function() {
    return firebase.auth().signOut();
  };

  let isAuthenticated = function () {
    return (firebase.auth().currentUser) ? true : false;
  };

  return {register, login, logout, isAuthenticated};
});


// "use strict";
//
// app.factory("AuthFactory", function($q) {
//
//   let getUser = () => {
//     console.log('WHAT THE HELL')
//     return firebase.auth().currentUser.uid;
//   };
//
//   let register = (userObj) => {
//     return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
//     .catch(function(error) {
//       let errorCode = error.code;
//       let errorMessage = error.Message;
//     });
//   };
//
//   let login = (userObj) => {
//     return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
//     .then((userData) => {
//       return $q.resolve(userData);
//     })
//     .catch((error) => {
//       let errorCode = error.code;
//       let errorMessage = error.Message;
//       console.error(errorCode, errorMessage);
//     });
//   };
//
//   let logout = () => {
//     console.log("logged out User");
//     return firebase.auth().signOut();
//   };
//
//   let isAuthenticated = () => (firebase.auth().currentUser) ? true : false;
//
//   return {isAuthenticated, getUser, register, login, logout};
// });
//
// app.run(["$location", "FBCreds",  "AuthFactory", function ($location, FBCreds, AuthFactory) {
//   // console.log('WHATEVER')
//   let authConfig = {
//     apiKey: FBCreds.apiKey,
//     authDomain: FBCreds.authDomain,
//     databaseURL: FBCreds.databaseURL,
//     storageBucket: FBCreds.storageBucket,
//   };
//
//   firebase.initializeApp(authConfig);
//
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       // User is signed in.
//       console.log('user', user)
//       AuthFactory.setUser(user.uid);
//       $location.url("/");
//     } else {
//       // No user is signed in.
//       $location.url("/");
//       AuthFactory.setUser(null); //this is to rest the current user to hide board.
//     }
//   });
//
// }]);
