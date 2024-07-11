"use client";

import styles from "./tickets-selector.module.scss";
import { MAX_PURCHASABLE_TICKETS } from "./checkout";

interface TicketsSelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
}

export function TicketsSelector({ quantity, onChange }: TicketsSelectorProps) {
  return (
    <div className={styles["selector"]}>
      <button
        type="button"
        onClick={() => onChange(quantity - 1)}
        disabled={quantity === 1}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        type="button"
        onClick={() => onChange(quantity + 1)}
        disabled={quantity === MAX_PURCHASABLE_TICKETS}
      >
        +
      </button>
    </div>
  );
}
