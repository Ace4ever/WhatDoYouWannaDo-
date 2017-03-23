app.factory('profileFactory', function (AuthFactory){
  let uid = AuthFactory.getUser();

  let userInterestsRef = () => {
    return firebase.database().ref('userInterests/' + uid + "/myInterests").on('value', function(snapshot) {
      let no = snapshot.val;
      console.log(no);
    })()
  }

  console.log(userInterestsRef());

  let getUserName = () => {
    return firebase.database().ref('users/' + uid).on('value', function(snapshot){
      let userName = snapshot.val()
      console.log(userName);
      return userName
    })
  }

  return {getUserName, userInterestsRef};
})
