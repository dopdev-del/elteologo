// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore' 
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhPO-6ibm_NyRmrm_vHhZzOw28a_i5R4c",
  authDomain: "blog-carlos.firebaseapp.com",
  projectId: "blog-carlos",
  storageBucket: "blog-carlos.appspot.com",
  messagingSenderId: "147448135096",
  appId: "1:147448135096:web:485600041180d27ece234d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
