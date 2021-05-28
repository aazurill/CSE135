firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log("still here")
  }
  else {
    console.log("logged out")
  }
});