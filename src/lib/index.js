// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

/*const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");*/


// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAaODj-xRqenmcztHx7NlQSdjn1qymLsw4",
  authDomain: "social-network-17cd8.firebaseapp.com",
  projectId: "social-network-17cd8",
  storageBucket: "social-network-17cd8.appspot.com",
  messagingSenderId: "1098491151135",
  appId: "1:1098491151135:web:f45ebeff7f405f84c9262a",
  measurementId: "G-RF5REDL25N"
});

var db = firebase.firestore();