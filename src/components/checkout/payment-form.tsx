"use client";

import { Button } from "@components/button/button";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import styles from "./payment-form.module.scss";

export function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const onClick = async () => {
    if (!stripe || !elements) return;

    await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://dice-orcin.vercel.app",
      },
    });
  };

  return (
    <div className={styles["payment-form"]}>
      <PaymentElement />

      <Button variant="primary" size="fluid" onClick={onClick}>
        Pay
      </Button>
    </div>
  );
}
