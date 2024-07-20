"use client";

import { Button } from "@components/button/button";
import { Image } from "@components/image/image";
import { Event } from "@types";
import { format } from "date-fns";
import { useState } from "react";
import styles from "./tickets-selector.module.scss";

interface TicketsSelectorProps {
  event: Event;
  onPayRequest: (amount: number) => void;
}

export function TicketsSelector({ event, onPayRequest }: TicketsSelectorProps) {
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(event.price);

  const onQuantityChange = (quantity: number) => {
    if (quantity < 1) return;

    setQuantity(quantity);

    if (event.price) {
      setAmount(quantity * event.price);
    }
  };

  return (
    <div className={styles["tickets-selector"]}>
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

      <div className={styles["selector"]}>
        <button
          type="button"
          onClick={() => onQuantityChange(quantity - 1)}
          disabled={quantity === 1}
        >
          -
        </button>
        <span>{quantity}</span>
        <button type="button" onClick={() => onQuantityChange(quantity + 1)}>
          +
        </button>
      </div>

      <Button
        variant="primary"
        size="fluid"
        onClick={() => onPayRequest(amount || 0)}
      >
        {event.price ? `Pay $ ${amount}` : "Get tickets"}
      </Button>
    </div>
  );
}
