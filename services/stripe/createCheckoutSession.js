import { collection, addDoc, onSnapshot } from "firebase/firestore"; 
import {firestore} from '../firebase'


//iterations == 0 no iterations will be made (monthly payment)
export async function createCheckoutSession(uid, priceId, mode, iterations) {
  const checkoutSessionRef = await addDoc(collection(firestore, `users/${uid}/checkout_sessions`), {
    price: priceId,
    mode: mode,
    allow_promotion_codes: true,
    billing_address_collection: "auto",
    success_url: `http://localhost:19006/Success?session_id={CHECKOUT_SESSION_ID}&price_id=${priceId}&mode=${mode}&iterations=${iterations}`,
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