// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxm3Xu14N8HNACLy8evkxP8RYXo3bn7Ds",
  authDomain: "netflixgpt-1cdae.firebaseapp.com",
  projectId: "netflixgpt-1cdae",
  storageBucket: "netflixgpt-1cdae.firebasestorage.app",
  messagingSenderId: "952374597040",
  appId: "1:952374597040:web:9a6ef957bf6296c92c7275",
  measurementId: "G-W75T00HK39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);