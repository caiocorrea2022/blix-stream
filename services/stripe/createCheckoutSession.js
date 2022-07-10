import { collection, addDoc, onSnapshot } from "firebase/firestore"; 
import {firestore} from '../firebase'
import {returnDomainZoom} from '../../config/data';


export async function createCheckoutSession(uid, priceId, mode) {
  const checkoutSessionRef = await addDoc(collection(firestore, `users/${uid}/checkout_sessions`), {
    price: priceId,
    mode: mode,
    allow_promotion_codes: true,
    billing_address_collection: "auto",
    success_url: `${returnDomainZoom}/Success?session_id={CHECKOUT_SESSION_ID}`,
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