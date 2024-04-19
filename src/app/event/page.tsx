import styles from "./page.module.css";
import { event } from "../../data";
import { Button } from "@components/button/button";

export default function Event() {
  return (
    <div className={styles["container"]}>
      <div className={styles["background__filter"]}></div>

      <div className={styles["content"]}>
        <img className={styles["poster"]} src={event.poster} />

        <div>
          <h1 className="is-title-xxl">{event.name}</h1>
          <p className="is-body-l has-mt-8">{event.location}</p>
          <p className="is-body-l has-mt-8 has-foreground-accent">
            {event.date}
          </p>

          <div className={styles["price"]}>
            <div>
              <p>Price:</p>
              <p className="is-body-l-medium has-mt-8">{event.price}</p>
            </div>

            <Button>Buy now</Button>
          </div>

          <div>
            <h2 className="is-title-l has-mt-64 has-mb-16">About the event</h2>
            <p className="is-body-m has-foreground-secondary">
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
