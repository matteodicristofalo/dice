import Image from "next/image";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["container"]}>
        <Image src={"/dice.gif"} alt="dice" width={100} height={122} />

        <div className={styles["nav"]}>
          <div>
            <h3 className="is-body-m-medium">Dice</h3>
            <ul>
              <li>About</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="is-body-m-medium">Support</h3>
            <ul>
              <li>Help Center</li>
              <li>Get in touch</li>
              <li>Request a refund</li>
            </ul>
          </div>
          <div>
            <h3 className="is-body-m-medium">Work with us</h3>
            <ul>
              <li>Artists</li>
              <li>Venues</li>
              <li>Promoters</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
