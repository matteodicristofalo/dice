"use client";

import { useDrawer } from "./drawer-context";
import styles from "./drawer.module.scss";

interface DrawerProps {
  children: React.ReactNode;
}

export function Drawer({ children }: DrawerProps) {
  const { state } = useDrawer();

  return (
    <div className={`${styles["drawer"]} ${styles[`drawer-${state}`]}`}>
      <div className={styles["drawer__content"]}>{children}</div>
    </div>
  );
}
