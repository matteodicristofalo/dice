"use client";

import { createPaymentIntent } from "@actions/stripe";
import { Event } from "@types";
import { useState } from "react";
import { PaymentForm } from "./payment-form";
import { TicketsSelector } from "./tickets-selector";

interface CheckoutProps {
  event: Event;
}

export function Checkout({ event }: CheckoutProps) {
  const [clientSecret, setClientSecret] = useState<string | undefined>(
    undefined
  );

  const onPayRequest = async (amount: number) => {
    const secret = await createPaymentIntent(amount);
    setClientSecret(secret);
  };

  if (!clientSecret) {
    return <TicketsSelector event={event} onPayRequest={onPayRequest} />;
  } else {
    return <PaymentForm clientSecret={clientSecret} />;
  }
}
