app.factory("SearchGoogleAPI", function($q, $http, APIKeys){
  let google_proxy = `https://google-proxy-server.herokuapp.com/maps/api`

  let latLng = [];
    let gettingLocation = (searchText) => {
      console.log(searchText)
        return $q((resolve, reject) => {
          $http.get(`${google_proxy}/geocode/json?address=${searchText}&key=${APIKeys.myKey}`)
            .success(function(returnObject){
              console.log(returnObject)
              resolve(returnObject);
            })
            .error(function(error){
              reject(error);
            });
        });
    };
    let getSearchResults = (myLocation, activity, radius) => {
      console.log(radius)
        return $q((resolve, reject) => {
          $http.get(`${google_proxy}/place/nearbysearch/json?location=${myLocation}&radius=${radius}&types=${activity}&key=${APIKeys.myKey}`)
            .success(function(returnObject){
              console.log(returnObject)
              resolve(returnObject);
            })
            .error(function(error){
              reject(error);
            });
        });
    };

    return {gettingLocation, getSearchResults};
});
