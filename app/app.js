var app = angular.module("justPick", 
	["ngRoute", "firebase", "checklist-model"]);

app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/splash', {
				templateUrl: './app/partials/splash.html',
				controller: 'loginCtrl'
			})
			.when("/main", {
				templateUrl: './app/partials/mainPage.html',
				controller: 'mainCtrl'
			})
			.when('/profile', {
				templateUrl: './app/partials/profile.html',
				controller: 'profileCtrl'
			})
			.otherwise('/splash');
	}]);