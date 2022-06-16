import "dotenv/config"; // loads variables from .env file
import express from "express";
import * as paypal from "./paypal-api.js";

const app = express();

app.use(express.static("public"));

app.post("/api/orders", async (req, res) => {
  const order = await paypal.createOrder();
  res.json(order);
});

app.post("/api/orders/:orderID/capture", async (req, res) => {
  const { orderID } = req.params;
  const captureData = await paypal.capturePayment(orderID);
  res.json(captureData);
});

app.listen(8888);

const paypalCreateOrder = window.firebase.functions().httpsCallable("paypalCreateOrder");
const paypalHandleOrder = window.firebase.functions().httpsCallable("paypalHandleOrder");

window.paypal.Buttons({
  createOrder: (data, actions) => paypalCreateOrder().then(response => response.data.id),

  onApprove: (data, actions) => {
    paypalHandleOrder({ orderId: data.orderID })
    alert("THANKS FOR ORDERING!")
  }

}).render('#paypal-button')