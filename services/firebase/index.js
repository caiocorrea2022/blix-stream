import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const { REACT_APP_FIREBASE_API_KEY, REACT_APP_FIREBASE_AUTH_DOMAIN, REACT_APP_FIREBASE_PROJECT_ID, REACT_APP_FIREBASE_STORAGE_BUCKET, REACT_APP_FIREBASE_MESSAGING_SENDER_ID, REACT_APP_FIREBASE_APP_ID, REACT_APP_FIREBASE_MEASUREMEMT_ID } = process.env;

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
