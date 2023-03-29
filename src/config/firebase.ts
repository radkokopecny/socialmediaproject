// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy4AKOiOqqdm2hQCdIxo4lrlMHjXTki4g",
  authDomain: "social-media-project-bfbc9.firebaseapp.com",
  projectId: "social-media-project-bfbc9",
  storageBucket: "social-media-project-bfbc9.appspot.com",
  messagingSenderId: "1032071540812",
  appId: "1:1032071540812:web:8ce17384562e365ea944e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)