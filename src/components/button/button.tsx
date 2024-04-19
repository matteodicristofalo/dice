import styles from "./button.module.css";

type ButtonProps = {
  children: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button type="button" className={styles["button"]}>
      {children}
    </button>
  );
}
