import { collection, addDoc, onSnapshot } from "firebase/firestore"; 
import {firestore} from '../firebase'

const schedule = await stripe.subscriptionSchedules.create({
    customer: 'cus_Lm6IwpeN372z92',
    start_date: 'now',
    end_behavior: 'release',
    phases: [
      {
        items: [{ price: 'price_1GqNdGAJVYItwOKqEHb', quantity: 1 }],
        iterations: 12,
      },
    ],
  });