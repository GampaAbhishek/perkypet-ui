// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsrIv3nYx694lUNN9SVAuibvP6pgIfC1E",
  authDomain: "perkypet-ui.firebaseapp.com",
  projectId: "perkypet-ui",
  storageBucket: "perkypet-ui.firebasestorage.app",
  messagingSenderId: "475706323200",
  appId: "1:475706323200:web:2c3d67ab291abb53a043e5",
  measurementId: "G-12JL8XVQDC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
