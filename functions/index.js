const functions = require("firebase-functions");
const admin = require('firebase-admin');
const data = require("./data");
// const paypal = require("@paypal/checkout-server-sdk");

admin.initializeApp();
const db = admin.firestore();

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

// const clientId = functions.config().paypal.client_id;
// const secretkey = functions.config().paypal.secret_key;

// const env = new paypal.core.SandboxEnvironment(clientId, secretkey);
// const client = new paypal.core.PayPalHttpClient(env);
// const request = new paypal.orders.OrdersCreateRequest();

//
// exports.paypalCreateOrder = functions.https.onCall(async (data, context) => {
//     request.requestBody({
//         "intent": "CAPTURE",
//         "purchase_units": [{
//             "amount": {
//                 currency_code: "BRL",
//                 "value": "100,00",
//             },
//         },
//         ],
//     });

//     const response = await client.execute(Request);

//     return response.result;
// });

// exports.paypalHandlerOrder = functions.https.onCall(async (data, context) => {
//     const orderId = data.orderId;
//     request = new paypal.orders.OrdersCaptureRequest(orderId);
//     request.requestBody({});
//     const response = await client.execute(request);

//     return response.result;
// });


exports.paymentTrigger = functions.firestore
    .document('users/{docId}/{paymentType}/{paymentMethodId}')
    .onWrite((change, context) => {

        const productId = []

        //get document, if documents not exists it has been deleted
        const newValue = change.after.exists ? change.after.data() : null;

        //get userId
        const userId = context.params.docId;

        //stripe subscritpion 
        if (newValue && context.params.paymentType == 'subscriptions') {

            if (newValue.status === 'active') {

                //TODO indentify PLAN and set current plan
                const productId = newValue.items[0].plan.product;

                const currentPlan = data[productId];

                db.doc(`users/${userId}`).set({
                    plan: currentPlan
                }, { merge: true });
            } else {

                //Set plan = 0, no plan active 
                db.doc(`users/${userId}`).set({
                    plan: '0'
                }, { merge: true });
            }
        }

        //stripe payment (course)
        if (newValue && context.params.paymentType == 'payments') {

            if (newValue.status === 'succeeded') {
                
                const priceId = newValue.items[0].price.id;

                db.doc(`users/${userId}`).set({
                    courses: admin.firestore.FieldValue.arrayUnion(priceId)
                }, { merge: true });
            }
        }
    });