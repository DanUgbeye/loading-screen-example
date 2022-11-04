import React, { createContext, useCallback, useEffect, useState } from "react";
import { ChildrenProps } from "../app.types";

export const LoadingContext = createContext({
  loading: false,
  openLoading: () => {},
  closeLoading: () => {}
});

function LoadingProvider({ children }: ChildrenProps) {
  const [loading, setLoading] = useState(false);

  const closeLoading = useCallback(() => setLoading(false), []);
  const openLoading = useCallback(() => setLoading(true), []);

  useEffect(() => {
    if (!loading) return;
    const timeout = setTimeout(() => {
      if (!loading) return;
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [loading]);

  return (
    <LoadingContext.Provider value={{ loading, openLoading, closeLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export default LoadingProvider;
