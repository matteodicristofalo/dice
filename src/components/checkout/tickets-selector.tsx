"use client";

import styles from "./tickets-selector.module.scss";

interface TicketsSelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
}

export function TicketsSelector({ quantity, onChange }: TicketsSelectorProps) {
  return (
    <div className={styles["selector"]}>
      <button type="button" onClick={() => onChange(quantity - 1)}>
        -
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={() => onChange(quantity + 1)}>
        +
      </button>
    </div>
  );
}
