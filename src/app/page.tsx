import styles from "./page.module.css";
import { Search } from "@components/search/search";

export default function Home() {
  return (
    <div className={styles["container"]}>
      <h1 className="is-title-xxxl">Find more of the events you love</h1>

      <p className="is-body-l has-foreground-secondary has-mt-32">
        Incredible live shows. Upfront pricing. Relevant recommendations. We
        make going out easy.
      </p>

      <Search />
    </div>
  );
}
