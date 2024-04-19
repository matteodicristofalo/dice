import styles from "./page.module.css";
import { event } from "../../data";
import { Button } from "@components/button/button";
import { LocationIcon } from "@icons/location";
import { CalendarIcon } from "@icons/calendar";

export default function Event() {
  return (
    <div className={styles["container"]}>
      <div className={styles["background__filter"]}></div>

      <div className={styles["content"]}>
        <img className={styles["poster"]} src={event.poster} />

        <div>
          <h1 className="is-title-xxl">{event.name}</h1>
          <p className="flex is-body-l has-gap-8 has-mt-24">
            <LocationIcon />
            <span>{event.location}</span>
          </p>
          <p className="flex is-body-l has-gap-8 has-mt-8">
            <CalendarIcon />
            <span className="has-foreground-accent">{event.date}</span>
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
            <p className="is-body-l has-foreground-secondary">
              {event.description}
            </p>
          </div>

          <hr className="divider has-mt-32" />

          <div>
            <h2 className="is-title-l has-mt-64 has-mb-16">Line up</h2>
            <div>
              <div className={styles["artist"]}>
                <div className="flex has-gap-16">
                  <div className={styles["artist__picture"]}></div>
                  <span>Mario Rossi</span>
                </div>
                <Button variant="foreground">Follow</Button>
              </div>
              <div className={styles["artist"]}>
                <div className="flex has-gap-16">
                  <div className={styles["artist__picture"]}></div>
                  <span>Mario Rossi</span>
                </div>
                <Button variant="foreground">Follow</Button>
              </div>
              <div className={styles["artist"]}>
                <div className="flex has-gap-16">
                  <div className={styles["artist__picture"]}></div>
                  <span>Mario Rossi</span>
                </div>
                <Button variant="foreground">Follow</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
