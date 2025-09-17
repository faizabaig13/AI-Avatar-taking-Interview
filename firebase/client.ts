// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATY9PeKZ7bxHVagUk07nUxL-wLhSHAZ4Q",
  authDomain: "interview-3912c.firebaseapp.com",
  databaseURL: "https://interview-3912c-default-rtdb.firebaseio.com",
  projectId: "interview-3912c",
  storageBucket: "interview-3912c.firebasestorage.app",
  messagingSenderId: "617987965347",
  appId: "1:617987965347:web:07c0fa9cbd78af8784da16",
  measurementId: "G-05ZX06SPS3"
};



// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
