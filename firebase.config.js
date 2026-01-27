// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4JFQ66vXhctx_VuZmMHgGHDQwyIfBCjc",
  authDomain: "react-firebase-integrati-f5196.firebaseapp.com",
  projectId: "react-firebase-integrati-f5196",
  storageBucket: "react-firebase-integrati-f5196.firebasestorage.app",
  messagingSenderId: "1049965299768",
  appId: "1:1049965299768:web:2cb20b71940a993b75becd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);