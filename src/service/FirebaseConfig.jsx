// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJZOF2v00HQG7oSZZ3qvXT7m5ONHF_EC0",
  authDomain: "tripplanner-82565.firebaseapp.com",
  projectId: "tripplanner-82565",
  storageBucket: "tripplanner-82565.firebasestorage.app",
  messagingSenderId: "995540402604",
  appId: "1:995540402604:web:032cff8950cb341c81ba09",
  measurementId: "G-ZDETQ0MMP8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);