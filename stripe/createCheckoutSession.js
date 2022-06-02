import { collection, addDoc, onSnapshot } from "firebase/firestore"; 
import {firestore} from '../firebase'
// import getStripe from "./initializeStripe";

export async function createCheckoutSess(uid) {
  const checkoutSessionRef = await addDoc(collection(firestore, `users/${uid}/checkout_sessions`), {
    price: 'price_1L57kuCmcyIwF9rcOy53GUmn',
    mode: "subscription",
    allow_promotion_codes: true,
    billing_address_collection: "auto",
    success_url: 'http://localhost:19006/Success?session_id={CHECKOUT_SESSION_ID}',
    // success_url: window.location.origin,
    cancel_url: window.location.origin,
  }); 

  onSnapshot(checkoutSessionRef, async (snap) => {
    const { error, url } = snap.data();
        if (error) {
          alert(`Ocorreu um erro: ${error.message}`);
        }
        if (url) {
             window.location.assign(url);
        }
    });

 }