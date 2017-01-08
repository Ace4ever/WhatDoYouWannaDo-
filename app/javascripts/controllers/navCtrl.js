app.controller('NavCtrl', 'SearchData' function($scope, SearchData) {
  $scope.searchtext = SearchData;

  let logoutUser = function () {
    console.log("HI HI HI");
    AuthFactory.logut();
  }
  // $scope.navItems = [
  // {url: '#/logout', name: Logout, showState: '$parent.isLoggedIn'},
  // {url: '#'}
  // ]
  // $sope.isActive = (viewLocation) => viewLocation === $location.path();
})
