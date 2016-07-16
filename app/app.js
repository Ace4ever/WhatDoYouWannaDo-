var app = angular.module("justPick",
	["ngRoute", "firebase", "checklist-model"]);

app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/splash', {
				templateUrl: './partials/splash.html',
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
