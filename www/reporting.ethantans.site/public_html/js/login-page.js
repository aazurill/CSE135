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

// Initialize Firebase Database
const database = firebase.database();

const navLinks = document.querySelector('nav div ul li')
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;


  firebase.auth().signInWithEmailAndPassword(username, password)
    .then((userCredential) => {
      // Signed in
      alert("Hey! You logged in")
      let user = username.split("@")[0]
      database.ref().child(`users/admin/`).once('value', function (snapshot) {
        if (snapshot.hasChild(user)) {
          alert(' user admin ');
          window.location = "../pages/adminViews.html"
        }
        else {
          alert(' user not admint')

          window.location = "../pages/basicViews.html"
        }
      });
    })
    .catch((error) => {
      alert("Wrong email or password")
    })
})