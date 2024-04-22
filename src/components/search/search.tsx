"use client";

import Link from "next/link";
import styles from "./search.module.css";
import { useState } from "react";
import { SearchIcon } from "@icons/search";
import { motion, AnimatePresence } from "framer-motion";

interface SearchProps {
  suggestions: string[];
}

export function Search({ suggestions }: SearchProps) {
  const [filteredSuggestions, setFilteredSuggestions] =
    useState<string[]>(suggestions);
  const [isInputFocused, setIsInputFocused] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const filtered = suggestions.filter((city) =>
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
          data-testid="input"
        />

        <div className={styles["icon"]}>
          <SearchIcon />
        </div>
      </div>

      <AnimatePresence>
        {isInputFocused && filteredSuggestions.length > 0 && (
          <motion.div
            className={styles["suggestions"]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-testid="suggestions"
          >
            {filteredSuggestions.map((city) => (
              <Link
                key={city}
                href={`/browse?q=${city}`}
                className={`${styles["suggestion"]}`}
                data-suggestion="true"
              >
                {city}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
