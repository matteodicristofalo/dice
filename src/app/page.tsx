"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { ArrowRightIcon } from "@icons/arrow-right";
import { useRouter } from "next/navigation";

export default function Home() {
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
    <div className={styles["container"]}>
      <h1 className="is-title-xxxl">Find more of the events you love</h1>

      <p className="is-body-l has-foreground-secondary has-mt-32">
        Incredible live shows. Upfront pricing. Relevant recommendations. We
        make going out easy.
      </p>

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
    </div>
  );
}
