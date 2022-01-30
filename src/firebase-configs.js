// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBKw7c4XywqY7Ev73QcTGiceORQawYp0sM',
  authDomain: 'elteologo-a7536.firebaseapp.com',
  projectId: 'elteologo-a7536',
  storageBucket: 'elteologo-a7536.appspot.com',
  messagingSenderId: '581723689821',
  appId: '1:581723689821:web:4eba7efbea810f9b680eb4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
