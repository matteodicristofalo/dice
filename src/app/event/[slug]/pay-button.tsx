"use client";

import { Button } from "@components/button/button";
import { useDrawer } from "@components/drawer/drawer-context";

interface PayButtonProps {
  children: React.ReactNode;
}

export function PayButton({ children }: PayButtonProps) {
  const { open } = useDrawer();

  return (
    <Button variant="primary" onClick={open}>
      {children}
    </Button>
  );
}
