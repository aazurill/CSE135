// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMgDXqr3YnqVAoTY-7waATZQ3DFLc_o0w",
  authDomain: "cse135hw4-6ee98.firebaseapp.com",
  projectId: "cse135hw4-6ee98",
  storageBucket: "cse135hw4-6ee98.appspot.com",
  messagingSenderId: "1008104987015",
  appId: "1:1008104987015:web:f6b4b6c45b69cc1206db22",
  measurementId: "G-V3LNJZMP8N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.addEventListener('load', (event) => {
  firebase.auth().signOut().then(function () {
    console.log("logged out")
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log("still here")
      }
      else {
        console.log("nope you logged out")
      }
    });
    // Sign-out successful.
  }, function (error) {
    // An error happened.
  });
})