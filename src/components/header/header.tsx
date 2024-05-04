import Link from "next/link";
import styles from "./header.module.css";
import { Logo } from "../icons/logo";

export function Header() {
  return (
    <header className={styles["header"]}>
      <Link href="/">
        <Logo />
      </Link>

      <nav>
        <ul>
          <li className={styles["header__link"]}>
            <Link href="/not-found">Help Centre</Link>
          </li>
          <li className={styles["header__link"]}>
            <Link href="/not-found">Blog</Link>
          </li>
          <li className={styles["header__link"]}>
            <Link href="/not-found">Log in</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
