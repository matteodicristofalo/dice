"use client";

import styles from "./search.module.css";
import { useState } from "react";
import { ArrowRightIcon } from "@icons/arrow-right";
import { useRouter } from "next/navigation";

export function Search() {
  const router = useRouter();
  const [value, setValue] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") redirect();
  }

  function redirect() {
    router.push(`/browse?q=${encodeURIComponent(value)}`);
  }

  return (
    <div className={styles["search"]}>
      <input
        className={styles["input"]}
        type="text"
        placeholder="Enter a city"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <div className={styles["icon"]} onClick={redirect}>
        <ArrowRightIcon />
      </div>
    </div>
  );
}
