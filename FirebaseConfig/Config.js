// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDl6TU6L_Hd5SwLYXNEc0WSaVK_FGl2TBI",
    authDomain: "reactnative-b5cb4.firebaseapp.com",
    projectId: "reactnative-b5cb4",
    storageBucket: "reactnative-b5cb4.appspot.com",
    messagingSenderId: "568867826838",
    appId: "1:568867826838:web:30acd3dc23b3f10f13e6b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }