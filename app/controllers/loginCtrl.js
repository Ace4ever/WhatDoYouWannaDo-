app.controller("loginCtrl", ["$q", "$http", "$scope", "getSet",
  function($q, $http, $scope, getSet) {


    //private variables
    $scope.currentUid = '';
    $scope.loginEmail = '';
    $scope.loginPassword = '';

    var ref = new Firebase("https://justpick.firebaseio.com/users");
    var errorMsg = $('#errorMessage')


    //register user
    $scope.registerUser  = function(){
      if( $scope.loginEmail !== "" && $scope.loginPassword !== "" && $scope.loginEmail !== undefined && $scope.loginPassword !== undefined){
        console.log("$scope.loginEmail ", $scope.loginEmail);
        console.log("$scope.loginPassword ", $scope.loginPassword);

        ref.createUser({
          email    : $scope.loginEmail,
          password : $scope.loginPassword
        },
        function(error, userData) {
          if (error) {
            console.log("Error creating user:", error);
          } else {
            console.log("Successfully created user account with uid:", userData.uid);
            $scope.currentUid = userData.uid;
            ref.child("/"+userData.uid).set({
              "firstName": "",
              "lastName": "",
              "location": "",
            });
          }
        });
      }  else {
          errorMsg.html('<b>Please enter an email and password</b>').css('color', 'red');
          console.log("you gotta enter info");
      }
    };

    $scope.loginUser = function(){


      ref.authWithPassword({
        email    : $scope.loginEmail,
        password : $scope.loginPassword
      }, function(error, authData) {
        if (error) {
          console.log(errorMsg);
          errorMsg.html("<b>Email or password is incorrect.  Please try again.</b>").css('color', 'red');
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData.uid);
          $("#splashPage").css({"display":"none"});
          $("#mainPage").fadeIn("slow");
          getSet.setUid(authData.uid);
          console.log("general vars uid ", getSet.getUid());
          window.location = '/#main'
        }
      });
    };
  }]);
