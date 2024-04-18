import Link from "next/link";
import styles from "./page.module.css";

const event = {
  name: "Ciao Discoteca Italiana. Notturno Italiano",
  date: "dom 21 Maggio",
  location: "Stecca 3.0",
  price: "$46,04",
  poster:
    "https://dice-media.imgix.net/attachments/2024-04-10/9d07fc2a-48f3-4efe-bd8e-1de1866bba99.jpg?rect=0%2C0%2C1080%2C1080&auto=format%2Ccompress&q=40&w=328&fit=max&dpr=2",
};

const events = Array(8).fill(event);

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
