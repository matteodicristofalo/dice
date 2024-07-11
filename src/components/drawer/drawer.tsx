"use client";

import { CloseIcon } from "@components/icons/close";
import { useDrawer } from "./drawer-context";
import styles from "./drawer.module.scss";

interface DrawerProps {
  children: React.ReactNode;
}

export function Drawer({ children }: DrawerProps) {
  const { state, close } = useDrawer();

  return (
    <div className={`${styles["drawer"]} ${styles[`drawer-${state}`]}`}>
      <button
        type="button"
        className={styles["drawer__close-button"]}
        onClick={close}
      >
        <CloseIcon />
      </button>
      <div className={styles["drawer__content"]}>{children}</div>
    </div>
  );
}
