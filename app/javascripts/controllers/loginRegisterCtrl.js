"use strict";

app.controller("loginRegisterCtrl", function($scope, $window, AuthFactory) {
  $scope.userInfo = {
    email: "",
    password: ""
  };

  $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });

  $scope.registerUser = () => {
    console.log("you clicked register");
    AuthFactory.register({
      email: $scope.userInfo.email,
      password: $scope.userInfo.password
    })
    .then( (userData) => {
      console.log("newUser", userData);
      $scope.loginUser();
    }, (error) => {
      console.log(`Error creating user: ${error}`);
    });
  };

  $scope.loginUser = () => {
    console.log("you clicked login");
    AuthFactory.login($scope.userInfo)
    .then( (data) => {
      if (data) {
        $window.location.href = "#/main";
      } else {
        $window.location.href = "#/login";
      }
      console.log("data from login", data);
    },
    (error) => {
      console.log("error loggin in", error);
    });
  };

  $scope.logoutUser = () => {
    console.log("HI HI HI");
    AuthFactory.logout();
  }
});
