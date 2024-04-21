"use client";

import Link from "next/link";
import styles from "./search.module.css";
import { useState } from "react";
import { SearchIcon } from "@/components/icons/search";

const availableCities = [
  "London",
  "Milan",
  "Miami",
  "New York",
  "Paris",
  "Tokyo",
  "Toronto",
  "Vancouver",
  "Venice",
];

interface SearchProps {
  suggestions: string[];
}

export function Search({ suggestions }: SearchProps) {
  const [filteredSuggestions, setFilteredSuggestions] =
    useState<string[]>(availableCities);
  const [isInputFocused, setIsInputFocused] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const filtered = availableCities.filter((city) =>
      city.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    if (e.relatedTarget?.getAttribute("data-suggestion") === "true") {
      return;
    }

    setIsInputFocused(false);
  }

  return (
    <div className={styles["search"]}>
      <div className={styles["wrapper"]}>
        <input
          className={styles["input"]}
          type="text"
          placeholder="Enter a city"
          onFocus={() => setIsInputFocused(true)}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        <div className={styles["icon"]}>
          <SearchIcon />
        </div>
      </div>

      {isInputFocused && filteredSuggestions.length > 0 && (
        <div className={styles["suggestions"]}>
          {suggestions.map((city) => (
            <Link
              key={city}
              href={`/browse?q=${city}`}
              className={`${styles["suggestion"]}`}
              data-suggestion="true"
            >
              {city}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
