import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAaj8zCojCBI6067pL0LQWyiwDBhz4rI3U",
  authDomain: "book-santa-app-4fa3b.firebaseapp.com",
  projectId: "book-santa-app-4fa3b",
  storageBucket: "book-santa-app-4fa3b.appspot.com",
  messagingSenderId: "1445954077",
  appId: "1:1445954077:web:998ce37bb2311091f2fcf4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
