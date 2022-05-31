import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise=Stripe;

const initializeStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(
      "pk_test_51K1wAiCmcyIwF9rc6qXCdY74nQqJ0VW7NLB5RBAlJ3a41zUbg7qbtmHvuEE6DpQsNhdZ8QWMN7ENn9sTkP8B45S500xixEq7M0"
    );
  }
  return stripePromise;
};
export default initializeStripe;
