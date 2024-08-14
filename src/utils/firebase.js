// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9t9-XvCvFX9cWFz9MQEXRmeT0up-op-M",
  authDomain: "netflix-gpt-59081.firebaseapp.com",
  projectId: "netflix-gpt-59081",
  storageBucket: "netflix-gpt-59081.appspot.com",
  messagingSenderId: "995153878057",
  appId: "1:995153878057:web:c45b18586aab624faa1038",
  measurementId: "G-VGV1V48C4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Optional
const auth = getAuth(app);

export { auth };
