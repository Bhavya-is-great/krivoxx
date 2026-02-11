"use client";

import { createContext, useContext, useRef, useState } from "react";

const TransitionContext = createContext();

export const useTransition = () => useContext(TransitionContext);

export function TransitionProvider({ children }) {
  const [active, setActive] = useState(false);

  const routeRef = useRef(null);
  const modelRef = useRef(null);

  const waitForRoute = () => new Promise(res => routeRef.current = res);
  const waitForModel = () => new Promise(res => modelRef.current = res);

  const resolveRoute = () => {
    routeRef.current?.();
    routeRef.current = null;
  };

  const resolveModel = () => {
    modelRef.current?.();
    modelRef.current = null;
  };

  return (
    <TransitionContext.Provider
      value={{
        active,
        setActive,
        waitForRoute,
        waitForModel,
        resolveRoute,
        resolveModel,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
}