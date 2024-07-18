"use server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function createPaymentIntent() {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 100,
    currency: "eur",
  });

  return paymentIntent.client_secret;
}
