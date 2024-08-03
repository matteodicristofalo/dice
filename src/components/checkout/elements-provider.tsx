import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ReactNode } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export function ElementsProvider({
  clientSecret,
  children,
}: {
  clientSecret: string;
  children: ReactNode;
}) {
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
      {children}
    </Elements>
  );
}
