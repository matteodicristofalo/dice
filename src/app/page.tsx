import Link from "next/link";
import styles from "./page.module.css";
import { events } from "../data";

export default function Home() {
  return (
    <div className={styles["events"]}>
      <h1>Popular events in Milan</h1>
      <ul className={styles["events__grid"]}>
        {events.map((event) => (
          <li>
            <Link href="event">
              <div className={styles["event"]}>
                <img className={styles["event__poster"]} src={event.poster} />
                <span className={styles["event__name"]}>{event.name}</span>
                <span className={styles["event__date"]}>{event.date}</span>
                <span className={styles["event__location"]}>
                  {event.location}
                </span>
                <span className={styles["event__price"]}>{event.price}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
