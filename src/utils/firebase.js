// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAaNRuRJVjL_FfrXVO9SFSXqdHobQZ0NY",
  authDomain: "netflixgpt-27313.firebaseapp.com",
  projectId: "netflixgpt-27313",
  storageBucket: "netflixgpt-27313.appspot.com",
  messagingSenderId: "70222440211",
  appId: "1:70222440211:web:0b1152e5cc2511c0f69ce6",
  measurementId: "G-688GE5F4J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);