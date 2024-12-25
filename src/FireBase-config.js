// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKFVV5cr5IwjVQzV61pCXn5lA_dcXLBxo",
  authDomain: "mindcurechat.firebaseapp.com",
  projectId: "mindcurechat",
  storageBucket: "mindcurechat.firebasestorage.app",
  messagingSenderId: "473412404803",
  appId: "1:473412404803:web:cf63f0a4d61bbccbe9b6f6",
  measurementId: "G-H1CHVCND01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore(app)