const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyDPVj9w9ux56acZfkfvf2qe5fSc61VINnE",
  authDomain: "project-anticovid.firebaseapp.com",
  databaseURL: "https://project-anticovid.firebaseio.com",
  projectId: "project-anticovid",
  storageBucket: "project-anticovid.appspot.com",
  messagingSenderId: "286951309388",
  appId: "1:286951309388:web:b5094a4edc8aa7872d74e9",
  measurementId: "G-JB747XK1M7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);