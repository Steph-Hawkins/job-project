
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDZklynmKjVCchpR0tU45vSGZEivsQ0TLs",
  authDomain: "career-2b296.firebaseapp.com",
  projectId: "career-2b296",
  storageBucket: "career-2b296.firebasestorage.app",
  messagingSenderId: "1069911931665",
  appId: "1:1069911931665:web:5b24f4c93de052ccfc6ab0",
  measurementId: "G-775L3BL5EF"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
