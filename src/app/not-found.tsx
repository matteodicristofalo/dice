import Link from "next/link";
import styles from "./not-found.module.scss";
import { Button } from "@components/button/button";

export default function NotFound() {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["heading"]}>Page not found</h1>
      <p className={styles["paragraph"]}>
        We are sorry! this page has not been implemented yet...
      </p>
      <Link href="/">
        <Button variant="primary">Return Home</Button>
      </Link>
    </div>
  );
}
