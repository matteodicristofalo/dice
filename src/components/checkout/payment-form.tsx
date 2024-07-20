"use client";

import { Button } from "@components/button/button";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
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
      <Form />
    </Elements>
  );
}

function Form() {
  const stripe = useStripe();
  const elements = useElements();

  const onClick = async () => {
    if (!stripe || !elements) return;

    await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000",
      },
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <PaymentElement />
      <Button variant="primary" size="fluid" onClick={onClick}>
        Pay
      </Button>
    </div>
  );
}
