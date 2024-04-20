import Link from "next/link";
import styles from "./page.module.css";
import { events } from "../../data";

export default function Browse() {
  return (
    <div className={styles["container"]}>
      <h1 className="is-title-xl">
        Popular events in <span className="has-foreground-accent">Milan</span>
      </h1>

      <div className={styles["events"]}>
        {events.map((event, idx) => (
          <Link href="event" key={idx}>
            <div className={styles["event"]}>
              <img className={styles["event__poster"]} src={event.poster} />
              <p className={styles["event__name"]}>{event.name}</p>
              <p className="is-body-s has-mb-4 has-foreground-accent">
                {event.date}
              </p>
              <p className="is-body-s has-mb-4">{event.location}</p>
              <p className="is-body-s has-mb-4">{event.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
