import Link from "next/link";
import styles from "./not-found.module.css";
import { Button } from "@components/button/button";

export default function NotFound() {
  return (
    <div className={styles["container"]}>
      <h1 className="is-title-xxl">Page not found</h1>
      <p className="has-mt-16 has-mb-32">
        We are sorry! this page has not been implemented yet...
      </p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
