import Link from "next/link";
import styles from "./page.module.css";
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
      <h1 className="is-title-xl">
        Popular events in <span className="has-foreground-accent">{city}</span>
      </h1>

      <div className={styles["events"]}>
        {events.map((event: any) => (
          <Link href={`event/${event.slug}`} key={event.slug}>
            <div>
              <Image src={event.poster.url} alt={event.name} />
              <p className={styles["name"]}>{event.name}</p>
              <p className="has-mb-4 has-foreground-accent">
                {format(event.date, "dd LLL")}
              </p>
              <p className="has-mb-4 has-foreground-secondary">
                {event.location.name}
              </p>
              <p className="has-mb-4">
                {event.price ? `$ ${event.price}` : "Free"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
