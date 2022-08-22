// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-e2251.firebaseapp.com",
  projectId: "tutorial-e2251",
  storageBucket: "tutorial-e2251.appspot.com",
  messagingSenderId: "517458229310",
  appId: "1:517458229310:web:f4d47809b4bf5d4908f96f",
  measurementId: "G-GPV7T8BCNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 export const auth = getAuth();
