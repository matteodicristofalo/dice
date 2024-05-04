"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { Logo } from "../icons/logo";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`${styles["header"]} ${isOpen ? styles["is-open"] : ""}`}
    >
      <Link href="/">
        <Logo />
      </Link>

      <button
        className={styles["hamburger"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
      </button>

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
