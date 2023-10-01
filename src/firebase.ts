// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLW3IIW4UA1f4s9VqOITe9ty5RC2uSf4s",
  authDomain: "fir-auth-1dc1f.firebaseapp.com",
  projectId: "fir-auth-1dc1f",
  storageBucket: "fir-auth-1dc1f.appspot.com",
  messagingSenderId: "559587404420",
  appId: "1:559587404420:web:a61bb41e8f62a06409f0d1"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

