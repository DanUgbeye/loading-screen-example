import React, { createContext, useCallback, useState } from "react";
import { ChildrenProps } from "../app.types";

export const NetworkErrorContext = createContext({
  networkError: false,
  openNetworkError: () => {},
  closeNetworkError: () => {}
});

function NetworkErrorProvider({ children }: ChildrenProps) {
  const [networkError, setNetworkError] = useState(false);

  const closeNetworkError = useCallback(() => setNetworkError(false), []);
  const openNetworkError = useCallback(() => setNetworkError(true), []);

  return (
    <NetworkErrorContext.Provider value={{ networkError, openNetworkError, closeNetworkError }}>
      {children}
    </NetworkErrorContext.Provider>
  );
}

export default NetworkErrorProvider;
