import styles from "./page.module.scss";
import { Button } from "@components/button/button";
import { LocationIcon } from "@icons/location";
import { CalendarIcon } from "@icons/calendar";
import { getEvent } from "@actions";
import { format } from "date-fns";
import { Image } from "@components/image/image";

interface EventProps {
  params: {
    slug: string;
  };
}

export default async function Event({ params }: EventProps) {
  const { poster, name, location, date, price, description, lineupCollection } =
    await getEvent(params.slug);

  return (
    <div className={styles["container"]}>
      <div
        className={styles["background"]}
        style={{
          backgroundImage: `url("${poster.url}")`,
        }}
      ></div>

      <div className={styles["content"]}>
        <div className={styles["poster"]}>
          <Image src={poster.url} alt={name} />
        </div>

        <div>
          <section>
            <h1 className={styles["name"]}>{name}</h1>

            <div className={styles["location"]}>
              <LocationIcon />
              <span>{location.name}</span>
            </div>

            <div className={styles["date"]}>
              <CalendarIcon />
              <span>{format(date, "EEE dd LLL, HH:mm")}</span>
            </div>

            <div className={styles["price"]}>
              <div>
                <span>Price:</span>
                <span>{price ? `$ ${price}` : "Free"}</span>
              </div>

              <Button>Buy now</Button>
            </div>
          </section>

          {description && (
            <section className={styles["description"]}>
              <h2>About the event</h2>
              <p>{description}</p>
            </section>
          )}

          {lineupCollection && lineupCollection.items.length > 0 && (
            <section className={styles["lineup"]}>
              <h2>Line up</h2>

              {lineupCollection.items.map((artist: Artist, i: number) => (
                <div className={styles["lineup__element"]} key={i}>
                  <div className={styles["artist"]}>
                    <div className={styles["artist__photo"]}></div>
                    <span>{artist.name}</span>
                  </div>
                  <Button variant="foreground">Follow</Button>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
