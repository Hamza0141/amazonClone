// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrIvWnE5aJ_gTbvD2MAj0HKFo6BY2qTM0",
  authDomain: "amzon-clone-2023.firebaseapp.com",
  projectId: "amzon-clone-2023",
  storageBucket: "amzon-clone-2023.appspot.com",
  messagingSenderId: "330319254381",
  appId: "1:330319254381:web:d58d1dff01720a9666c064",
  measurementId: "G-Y8GZLNPE8Z",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const db = app.firestore()
export { auth, db };