// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTeeBxyoVFXeD0XmLA-j4eLM912KU_jIw",
  authDomain: "test-128c4.firebaseapp.com",
  projectId: "test-128c4",
  storageBucket: "test-128c4.appspot.com",
  messagingSenderId: "1032436083367",
  appId: "1:1032436083367:web:bb6399cdcc50e07c598982",
};

// Initialize Firebase
let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;
