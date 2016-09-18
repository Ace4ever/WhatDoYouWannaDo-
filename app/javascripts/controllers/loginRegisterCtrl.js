app.controller('loginRegisterCtrl', function($scope, AuthFactory, $window) {
  $scope.userInfo = {
    email: "",
    password: ""
  };

  $(".button-collapse").sideNav();

  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });

  $scope.loginUser = () => {
    AuthFactory.login($scope.userInfo)
    .then((data) => {
      console.log("logged in with email data", data);
      $window.location.href = '#/main';
    });
  };

  $scope.registerUser = () => {
    AuthFactory.register($scope.userInfo)
    .then((data) => {
      console.log("Email and password registration Data", data);
      AuthFactory.login($scope.userInfo);
    });
  };

    $scope.logoutUser = () => {
      AuthFactory.logout();
      $location.url('/');
      console.log('User is logged out')
    }
});
//
//
//     //private variables
//     $scope.confirmPassword = '';
//     $scope.userIsLoggedIn = false;
//     $scope.userIsLoggedOut = true;
//
//     var ref = new Firebase("https://justpick.firebaseio.com/users");
//     var errorMsg = $('#errorMessage')
//
//     var collapsingSection = $('.collapsible').collapsible({
//         accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
//       });
//
// $scope.openModal = function () {
//   $('#modal1').openModal({dismissible:false});
// };
// $scope.openModal();

// $scope.login = function(){
// 	console.log("Login initialized");
//   AuthFactory.authWithProvider(AuthFactory.googleProvider)
//   .then(function(result) {
//     var user = result.user.uid;
//     console.log("logged in user", user);
//   }).catch(function(error) {
//     console.log(error);
//   });
// };
//
//
//     //register user
//     $scope.registerUser  = function(){
//       $scope.userIsLoggedIn = true;
//       $scope.userIsLoggedOut = false;
//
//       if($scope.confirmPassword !== $scope.loginPassword){
//         errorMsg.html("<b>**Your passwords don't match.  Please try again.</b>").css('color', 'red');
//         console.log('YOU SUCK, WRONG PASSWORD!!');
//       } else
//         if( $scope.loginEmail !== "" && $scope.loginPassword !== "" && $scope.loginEmail !== undefined && $scope.loginPassword !== undefined){
//           console.log("$scope.loginEmail ", $scope.loginEmail);
//           console.log("$scope.loginPassword ", $scope.loginPassword);
//
//           ref.createUser({
//             email    : $scope.loginEmail,
//             password : $scope.loginPassword
//         },
//         function(error, userData) {
//           if (error) {
//             console.log("Error creating user:", error);
//           }  else {
//             console.log("Successfully created user account with uid:", userData.uid);
//             $scope.currentUid = userData.uid;
//             ref.child("/"+userData.uid).set({
//               "firstName": "",
//               "lastName": "",
//               "location": "",
//               "username": "",
//             });
//           }
//           window.location = '/#main'
//         });
//       }  else {
//           errorMsg.html('<b>Please enter an email and password</b>').css('color', 'red');
//           console.log("you gotta enter info");
//       }
//     };
//
//     $scope.loginUser = function(){
//       $scope.userIsLoggedIn = true;
//       $scope.userIsLoggedOut = false;
//
//       ref.authWithPassword({
//         email    : $scope.loginEmail,
//         password : $scope.loginPassword
//       }, function(error, authData) {
//         if (error) {
//           errorMsg.html("<b>Email or password is incorrect.  Please try again.</b>").css('color', 'red');
//           console.log(errorMsg);
//           console.log("Login Failed!", error);
//         } else {
//           console.log("Authenticated successfully with payload:", authData.uid);
//           $("#splashPage").css({"display":"none"});
//           // $("#mainPage").fadeIn("slow");
//           getSet.setUid(authData.uid);
//           console.log("general vars uid ", getSet.getUid());
//           window.location = '/#main'
//         }
//       });
//     };
  // }]);
//
