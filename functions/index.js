const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const clientId = functions.config().paypal.client_id;
const secretkey = functions.config().paypal.secret_key;
const paypal = require("@paypal/checkout-server-sdk");
const env = new paypal.core.SandboxEnvironment(clientId, secretkey);
const client = new paypal.core.PayPalHttpClient(env);
const request = new paypal.orders.OrdersCreateRequest();

// eslint-disable-next-line max-len
exports.paypalCreateOrder = functions.https.onCall(async (data, context) => {
  request.requestBody({
    "intent": "CAPTURE",
    "purchase_units": [{
      "amount": {
        // eslint-disable-next-line quote-props
        currency_code: "BRL",
        "value": "100,00",
      },
    },
    ],
  });

  // eslint-disable-next-line no-undef
  const response = await client.execute(Request);

  return response.result;
});

exports.paypalHandlerOrder = functions.https.onCall(async (data, context) => {
  const orderId = data.orderId;
  // eslint-disable-next-line no-const-assign
  request = new paypal.orders.OrdersCaptureRequest(orderId);
  request.requestBody({});
  const response = await client.execute(request);

  return response.result;
});
