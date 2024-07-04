import Link from "next/link";
import styles from "./page.module.scss";
import { getEventsFor } from "@actions";
import { format } from "date-fns";
import { Image } from "@components/image/image";

interface BrowseProps {
  searchParams: {
    q: string;
  };
}

export default async function Browse({ searchParams }: BrowseProps) {
  const city = searchParams["q"];
  const events = await getEventsFor(city);

  return (
    <div className={styles["container"]}>
      <h1 className={styles["heading"]}>
        Popular events in <span>{city}</span>
      </h1>

      <div className={styles["events"]}>
        {events.map((event) => (
          <Link href={`event/${event.slug}`} key={event.slug}>
            <div className={styles["event"]}>
              <Image src={event.poster.url} alt={event.name} />
              <p className={styles["event__name"]}>{event.name}</p>
              <p className={styles["event__date"]}>
                {format(event.date, "dd LLL")}
              </p>
              <p className={styles["event__location"]}>{event.location.name}</p>
              <p className={styles["event__price"]}>
                {event.price ? `$ ${event.price}` : "Free"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
