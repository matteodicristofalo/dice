import Link from "next/link";
import styles from "./header.module.css";
import { Logo } from "../logo/logo";

export function Header() {
  return (
    <header className={styles["header"]}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li className={styles["header__link"]}>Link</li>
          <li className={styles["header__link"]}>Link</li>
          <li className={styles["header__link"]}>Link</li>
        </ul>
      </nav>
    </header>
  );
}
