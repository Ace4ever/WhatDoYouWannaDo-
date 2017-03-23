app.controller('NavCtrl', 'SearchData' function($scope, SearchData) {
  $scope.searchtext = SearchData;

  let logoutUser = function () {
    console.log("HI HI HI");
    AuthFactory.logut();
  }
})
