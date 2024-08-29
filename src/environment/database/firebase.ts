// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCDBAELNWU-hV4Ovmy5cFefgeEkhpQobQs",
  authDomain: "board-92931.firebaseapp.com",
  projectId: "board-92931",
  storageBucket: "board-92931.appspot.com",
  messagingSenderId: "249701561597",
  appId: "1:249701561597:web:4e4b015b580a03b1f1ba94",
  measurementId: "G-TEXNMBYBFP",
  databaseURL: "https://board-92931-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);