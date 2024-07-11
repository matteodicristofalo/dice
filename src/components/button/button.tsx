import styles from "./button.module.scss";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "default" | "small" | "fluid";
  onClick?: () => void;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "default",
  onClick,
  children,
}: ButtonProps) {
  const className = `
    ${styles["button"]} 
    ${styles[`button--${variant}`]} 
    ${styles[`button--${size}`]}
  `;

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}
