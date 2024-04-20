import Link from "next/link";
import styles from "./page.module.css";
import { getEventsFor } from "@actions";

interface BrowseProps {
  searchParams: {
    q: string;
  };
}

export default function Browse({ searchParams }: BrowseProps) {
  const city = searchParams["q"];
  const events = getEventsFor(city);

  return (
    <div className={styles["container"]}>
      <h1 className="is-title-xl">
        Popular events in <span className="has-foreground-accent">{city}</span>
      </h1>

      <div className={styles["events"]}>
        {events.map((event, i) => (
          <Link href={`event/${i}`} key={i}>
            <div className={styles["event"]}>
              <img className={styles["poster"]} src={event.poster} />
              <p className={styles["name"]}>{event.name}</p>
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
