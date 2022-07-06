const functions = require("firebase-functions");
const admin = require('firebase-admin');
const data = require("./data");
const request = require('request');
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


exports.userTrigger = functions.firestore
    .document('users/{userId}')
    .onUpdate((change, context) => {

        const user = change.after.data();
        const userBefore = change.before.data();

        if(userBefore.stripeId != user.stripeId) {
    
            request.post(`https://api.stripe.com/v1/customers/${user.stripeId}/tax_ids`, {
                form: {
                    type: 'br_cpf',
                    value: user.CPF,
                },
                headers: {
                    'Authorization': 'Bearer sk_test_51K1wAiCmcyIwF9rcDllUmRHt47Sf8pzFwglHfcrHN6Zy8GdSnl3RFPl8yoPoOJbFXs18LK8eCHavE9oQilLFqzbk00dR3pma24'
                },
            }, (err, res, body) => {
                const info = JSON.parse(body)
    
            });
        }
       
    });


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
                const priceId = newValue.items[0].price.id;

                const currentPlan = data[priceId]?.plan;

                db.doc(`users/${userId}`).set({
                    plan: currentPlan
                }, { merge: true });

                const iterations = data[priceId]?.iterations;


                if (iterations > 0) {
                    const subId = context.params.paymentMethodId;

                    request.post('https://api.stripe.com/v1/subscription_schedules', {
                        form: {
                            from_subscription: subId
                        },
                        headers: {
                            'Authorization': 'Bearer sk_test_51K1wAiCmcyIwF9rcDllUmRHt47Sf8pzFwglHfcrHN6Zy8GdSnl3RFPl8yoPoOJbFXs18LK8eCHavE9oQilLFqzbk00dR3pma24'
                        }
                    }, (err, res, body) => {

                        const info = JSON.parse(body)

                        const scheduleId = info.id
                        const startDate = info.current_phase.start_date;

                        request.post(`https://api.stripe.com/v1/subscription_schedules/${scheduleId}`, {
                            form: {
                                end_behavior: 'cancel',
                                'phases[0]start_date': startDate,
                                'phases[0][items][0][price]': priceId,
                                'phases[0][iterations]': iterations,
                                'phases[0][items][0][quantity]': 1,
                            },
                            headers: {
                                'Authorization': 'Bearer sk_test_51K1wAiCmcyIwF9rcDllUmRHt47Sf8pzFwglHfcrHN6Zy8GdSnl3RFPl8yoPoOJbFXs18LK8eCHavE9oQilLFqzbk00dR3pma24'
                            },
                        }, (err, res, body) => {
                            const info = JSON.parse(body)
                        });
                    });

                }

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
                const months = data[priceId]?.months

                //TODO get months from data
                let date = new Date();
                date.setMonth(date.getMonth() + 6)

                db.doc(`users/${userId}`).set({
                    courses: admin.firestore.FieldValue.arrayUnion({priceId: priceId, dueDate: date})
                }, { merge: true });
            }
        }
    });