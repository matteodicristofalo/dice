"use client";

import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export function PaymentForm({ clientSecret }: { clientSecret: string }) {
  return (
    <Elements
      options={{
        clientSecret,
        appearance: {
          labels: "floating",
        },
      }}
      stripe={stripePromise}
    >
      <PaymentElement />
    </Elements>
  );
}
