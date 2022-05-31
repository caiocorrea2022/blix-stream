import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

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
export const firestore = getFirestore(app);
export const functions = getFunctions(app);