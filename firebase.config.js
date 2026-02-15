// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlDud0tYpCMaJYRAvkHB7aOmyUWTZGGOk",
  authDomain: "react-firebase-auth-512b1.firebaseapp.com",
  projectId: "react-firebase-auth-512b1",
  storageBucket: "react-firebase-auth-512b1.firebasestorage.app",
  messagingSenderId: "179814825691",
  appId: "1:179814825691:web:33a8895828995a5c2996fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);