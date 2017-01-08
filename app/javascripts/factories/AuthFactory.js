"use strict";

app.factory("AuthFactory", function($q) {
  

  let getUser = () => {
    console.log('WHAT THE HELL')
    return firebase.auth().currentUser.uid;
  };

  let register = (userObj) => {
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.Message;
    });
  };

  let login = (userObj) => {
    return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
    .then((userData) => {
      return $q.resolve(userData);
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.Message;
      console.error(errorCode, errorMessage);
    });
  };

  let logout = () => {
    console.log("logged out User");
    return firebase.auth().signOut();
  };

  let isAuthenticated = () => {
    return (firebase.auth().currentUser) ? true : false;
  };
  return {isAuthenticated, getUser, register, login, logout};
});
