import styles from "./button.module.scss";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "medium" | "small";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "medium",
  children,
}: ButtonProps) {
  const className = `
    ${styles["button"]} 
    ${styles[`button--${variant}`]} 
    ${styles[`button--${size}`]}
  `;

  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}
