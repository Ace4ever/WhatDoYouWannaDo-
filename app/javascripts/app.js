const app = angular.module("justPick", ["ngRoute"])
.constant('FirebaseURL', 'https://justpick.firebaseio.com/');

app.config(function($routeProvider) {


		$routeProvider
			.when('/', {
				templateUrl: './partials/loginRegister.html',
				controller: 'loginRegisterCtrl'
			})
			.when('/login', {
				templateUrl: './partials/loginRegister.html',
				controller: 'loginRegisterCtrl'
			})
			.when("/main", {
				templateUrl: './partials/mainPage.html',
				controller: 'mainCtrl'
			})
			.when("/search", {
				templateUrl: './partials/search.html',
				controller: 'searchCtrl'
			})
			.when('/profile', {
				templateUrl: './partials/profile.html',
				controller: 'profileCtrl'
			})
			.otherwise('/login');
	});
