import React, { createContext, useCallback, useState } from "react";
import { ChildrenProps } from "../app.types";

export const TimeoutErrorContext = createContext({
  timeoutError: false,
  openTimeoutError: () => {},
  closeTimeoutError: () => {}
});

function TimeoutErrorProvider({ children }: ChildrenProps) {
  const [timeoutError, setTimeoutError] = useState(false);

  const closeTimeoutError = useCallback(() => setTimeoutError(false), []);
  const openTimeoutError = useCallback(() => setTimeoutError(true), []);

  return (
    <TimeoutErrorContext.Provider value={{ timeoutError, openTimeoutError, closeTimeoutError }}>
      {children}
    </TimeoutErrorContext.Provider>
  );
}

export default TimeoutErrorProvider;
