// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeEav1cNhooBBfOwiSLL0cdb2LF4YNiwg",
  authDomain: "pantry-tracker-d5040.firebaseapp.com",
  projectId: "pantry-tracker-d5040",
  storageBucket: "pantry-tracker-d5040.appspot.com",
  messagingSenderId: "6703899714",
  appId: "1:6703899714:web:11bbf125e8de70a003f9db",
  measurementId: "G-80P413RNKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };