var app = angular.module("justPick",
	["ngRoute", "firebase", "checklist-model"])

app.config(['$routeProvider', function($routeProvider, keys) {
		$routeProvider

			.when('/splash', {
				templateUrl: './partials/splash.html',
				controller: 'loginCtrl'
			})
			.when('/login', {
				templateUrl: './partials/login.html',
				controller: 'loginCtrl'
			})
			.when('/register', {
				templateUrl: './partials/register.html',
				controller: 'loginCtrl'
			})
			.when("/main", {
				templateUrl: './partials/mainPage.html',
				controller: 'mainCtrl'
			})
			.when('/profile', {
				templateUrl: './partials/profile.html',
				controller: 'profileCtrl'
			})
			.otherwise('/splash');
	}]);
