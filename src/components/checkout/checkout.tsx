"use client";

import { Button } from "@components/button/button";
import { Event } from "@types";
import { format } from "date-fns";
import { Image } from "@components/image/image";
import { TicketsSelector } from "./tickets-selector";
import { useState } from "react";
import styles from "./checkout.module.scss";

interface CheckoutProps {
  event: Event;
}

export function Checkout({ event }: CheckoutProps) {
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(event.price);

  const onQuantityChange = (quantity: number) => {
    setQuantity(quantity);

    if (event.price) {
      setAmount(quantity * event.price);
    }
  };

  return (
    <div className={styles["checkout"]}>
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

      <Button variant="primary" size="fluid">
        {event.price ? `Pay $ ${amount}` : "Get tickets"}
      </Button>
    </div>
  );
}
