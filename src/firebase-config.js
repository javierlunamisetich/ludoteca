// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAphMv-VXdQW9FmSpllpkZvD8eADWJfTGs",
    authDomain: "ludoteca-dd2a3.firebaseapp.com",
    projectId: "ludoteca-dd2a3",
    storageBucket: "ludoteca-dd2a3.firebasestorage.app",
    messagingSenderId: "1081800731370",
    appId: "1:1081800731370:web:20f29904827b49fc218593",
    measurementId: "G-881R33BB86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };
