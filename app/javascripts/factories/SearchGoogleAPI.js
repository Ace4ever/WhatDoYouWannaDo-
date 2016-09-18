app.factory("SearchGoogleAPI", function($q, $http, APIKeys){
  console.log()
  let latLng = [];
    let gettingLocation = (searchText) => {
      console.log(searchText)
        return $q((resolve, reject) => {
          $http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchText}&key=${APIKeys.myKey}`)
            .success(function(returnObject){
              console.log(returnObject)
              resolve(returnObject);
            })
            .error(function(error){
              reject(error);
            });
        });
    };
    let getSearchResults = (myLocation) => {
      console.log(myLocation)
        return $q((resolve, reject) => {
          $http.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${myLocation}&radius=5000&type=restaurant&key=${APIKeys.myKey}`)
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
