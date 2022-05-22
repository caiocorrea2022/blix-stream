// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI2Lbad02hv7OXBSi7DpoBVj6gvPjAyyk",
  authDomain: "blix-stream.firebaseapp.com",
  projectId: "blix-stream",
  storageBucket: "blix-stream.appspot.com",
  messagingSenderId: "558703073281",
  appId: "1:558703073281:web:129555233ed00048754800",
  measurementId: "G-YN3VM4F5CP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);