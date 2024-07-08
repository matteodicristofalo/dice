"use client";

import { createContext, useContext, useState } from "react";

type DrawerContext = {
  state: DrawerState;
  open: () => void;
  close: () => void;
};

type DrawerState = "opened" | "closed";

const DrawerContext = createContext<DrawerContext | undefined>(undefined);

export function DrawerContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [drawerState, setDrawerState] = useState<DrawerState>("closed");

  return (
    <DrawerContext.Provider
      value={{
        state: drawerState,
        open: () => setDrawerState("opened"),
        close: () => setDrawerState("closed"),
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  const context = useContext(DrawerContext);

  if (context === undefined) {
    throw new Error("useDrawer must be used within a DrawerContext");
  }

  return context;
}
