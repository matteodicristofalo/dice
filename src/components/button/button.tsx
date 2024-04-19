import styles from "./button.module.css";

type ButtonProps = {
  variant?: "accent" | "foreground";
  children: React.ReactNode;
};

export function Button({ variant = "accent", children }: ButtonProps) {
  const className = `${styles["button"]} ${
    variant === "accent"
      ? styles["button--accent"]
      : styles["button--foreground"]
  }`;

  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}
