"use client";

import { createPaymentIntent } from "@actions/stripe";
import { Button } from "@components/button/button";
import { Image } from "@components/image/image";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Event } from "@types";
import { format } from "date-fns";
import { useState } from "react";
import styles from "./checkout.module.scss";
import { PaymentForm } from "./payment-form";
import { TicketsSelector } from "./tickets-selector";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface CheckoutProps {
  event: Event;
}

export function Checkout({ event }: CheckoutProps) {
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(event.price);
  const [clientSecret, setClientSecret] = useState<string | undefined>(
    undefined
  );

  const onQuantityChange = (quantity: number) => {
    if (quantity < 1 || quantity > MAX_PURCHASABLE_TICKETS) return;

    setQuantity(quantity);

    if (event.price) {
      setAmount(quantity * event.price);
    }
  };

  const onPayButtonClick = async () => {
    const secret = await createPaymentIntent();
    setClientSecret(secret);
  };

  return (
    <div className={styles["checkout"]}>
      {clientSecret ? (
        <Elements
          options={{
            clientSecret,
            appearance: {
              labels: "floating",
            },
          }}
          stripe={stripePromise}
        >
          <PaymentForm />
        </Elements>
      ) : (
        <>
          <div className={styles["event"]}>
            <div className={styles["event__poster"]}>
              <Image src={event.poster.url} alt={event.name} />
            </div>
            <div>
              <span className={styles["event__name"]}>{event.name}</span>
              <span className={styles["event__date"]}>
                {format(event.date, "EEE dd LLL, HH:mm")}
              </span>
              <span className={styles["event__location"]}>
                {event.location.name}
              </span>
            </div>
          </div>

          <TicketsSelector quantity={quantity} onChange={onQuantityChange} />
        </>
      )}

      <Button variant="primary" size="fluid" onClick={onPayButtonClick}>
        {event.price ? `Pay $ ${amount}` : "Get tickets"}
      </Button>
    </div>
  );
}

export const MAX_PURCHASABLE_TICKETS = 6;
