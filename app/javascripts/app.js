let app = angular.module("justPick", ["ngRoute", 'uiGmapgoogle-maps', 'checklist-model'])
.constant('FirebaseURL', 'https://justpick.firebaseio.com/');

app.config(function(uiGmapGoogleMapApiProvider, APIKeys) {
      uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDBUE5FfF65kNEX-gSwY0FRSVB4IJJi8Po',
        libraries: 'places'  // Required for SearchBox.
    });
});

app.config(($routeProvider) => {

		$routeProvider
			.when('/', {
				templateUrl: './partials/loginRegister.html',
				controller: 'loginRegisterCtrl'
			})
			.when('/login', {
				templateUrl: './partials/loginRegister.html',
				controller: 'loginRegisterCtrl'
			})
			.when('/logout', {
				templateUrl: './partials/loginRegister.html',
				controller: 'loginRegisterCtrl'
			})
			.when("/main", {
				templateUrl: './partials/mainPage.html',
				controller: 'mainCtrl'
			})
			.when('/profile', {
				templateUrl: './partials/profile.html',
				controller: 'profileCtrl'
			})
			.otherwise('/login');
	});

  app.run(["FBCreds",  "AuthFactory", function (FBCreds, AuthFactory) {
    let authConfig = {
      apiKey: FBCreds.apiKey,
      authDomain: FBCreds.authDomain,
      databaseURL: FBCreds.databaseURL,
      storageBucket: FBCreds.storageBucket,
    };
  firebase.initializeApp(authConfig);
}]);
