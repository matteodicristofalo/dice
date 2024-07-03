import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["container"]}>
        <Image src="/dice.gif" alt="dice" width={100} height={122} />

        <div className={styles["nav"]}>
          <div>
            <h3>Dice</h3>
            <ul>
              <li>
                <Link href="/not-found">About</Link>
              </li>
              <li>
                <Link href="/not-found">Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              <li>
                <Link href="/not-found">Help Center</Link>
              </li>
              <li>
                <Link href="/not-found">Get in touch</Link>
              </li>
              <li>
                <Link href="/not-found">Request a refund</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Work with us</h3>
            <ul>
              <li>
                <Link href="/not-found">Artists</Link>
              </li>
              <li>
                <Link href="/not-found">Venues</Link>
              </li>
              <li>
                <Link href="/not-found">Promoters</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
