"use client";

import { Event } from "@types";
import { Image } from "@components/image/image";
import { format } from "date-fns";
import styles from "./checkout.module.scss";

interface CheckoutProps {
  event: Event;
}

export function Checkout({ event }: CheckoutProps) {
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
    </div>
  );
}
