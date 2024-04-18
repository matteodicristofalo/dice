import { Logo } from "./Logo";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles["header"]}>
      <Logo />
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
