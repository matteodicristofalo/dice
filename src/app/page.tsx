import { getAvailableCities } from "./actions";
import { Search } from "@components/search/search";
import styles from "./page.module.scss";

export default async function Home() {
  const cities = await getAvailableCities();

  return (
    <div className={styles["container"]}>
      <h1 className={styles["heading"]}>Find more of the events you love</h1>

      <p className={styles["paragraph"]}>
        Incredible live shows. Upfront pricing. Relevant recommendations. We
        make going out easy.
      </p>

      <div className={styles["search"]}>
        <Search suggestions={cities} />
      </div>
    </div>
  );
}
