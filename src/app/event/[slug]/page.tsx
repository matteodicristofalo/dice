import styles from "./page.module.scss";
import { Button } from "@components/button/button";
import { LocationIcon } from "@icons/location";
import { CalendarIcon } from "@icons/calendar";
import { getEvent } from "@actions";
import { format } from "date-fns";
import { Image } from "@components/image/image";
import { Drawer } from "@components/drawer/drawer";
import { DrawerContextProvider } from "@components/drawer/drawer-context";
import { PayButton } from "./pay-button";
import { Checkout } from "@components/checkout/checkout";

interface EventProps {
  params: {
    slug: string;
  };
}

export default async function Event({ params }: EventProps) {
  const event = await getEvent(params.slug);

  return (
    <DrawerContextProvider>
      <div className={styles["container"]}>
        <div
          className={styles["background"]}
          style={{
            backgroundImage: `url("${event.poster.url}")`,
          }}
        ></div>

        <div className={styles["content"]}>
          <div className={styles["poster"]}>
            <Image src={event.poster.url} alt={event.name} />
          </div>

          <div>
            <section>
              <h1 className={styles["name"]}>{event.name}</h1>

              <div className={styles["location"]}>
                <LocationIcon />
                <span>{event.location.name}</span>
              </div>

              <div className={styles["date"]}>
                <CalendarIcon />
                <span>{format(event.date, "EEE dd LLL, HH:mm")}</span>
              </div>

              <div className={styles["price"]}>
                <div>
                  <span>Price:</span>
                  <span>{event.price ? `$ ${event.price}` : "Free"}</span>
                </div>

                <PayButton>Buy now</PayButton>
              </div>
            </section>

            {event.description && (
              <section className={styles["description"]}>
                <h2>About the event</h2>
                <p>{event.description}</p>
              </section>
            )}

            {event.lineupCollection &&
              event.lineupCollection.items.length > 0 && (
                <section className={styles["lineup"]}>
                  <h2>Line up</h2>

                  {event.lineupCollection.items.map((artist, i: number) => (
                    <div className={styles["lineup__element"]} key={i}>
                      <div className={styles["artist"]}>
                        <div className={styles["artist__photo"]}></div>
                        <span>{artist.name}</span>
                      </div>
                      <Button variant="secondary" size="small">
                        Follow
                      </Button>
                    </div>
                  ))}
                </section>
              )}
          </div>
        </div>
      </div>

      <Drawer>
        <Checkout event={event} />
      </Drawer>
    </DrawerContextProvider>
  );
}
