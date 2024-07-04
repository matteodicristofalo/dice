import styles from "./button.module.scss";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({ variant = "primary", children }: ButtonProps) {
  const className = `${styles["button"]} ${styles[`button--${variant}`]}`;

  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}
