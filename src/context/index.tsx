import React from "react";
import LoadingProvider from "./loading.context";
import NetworkErrorProvider from "./networkError.context";
import TimeoutErrorProvider from "./timeoutError.context";

function Providers({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return (
    <LoadingProvider>
      <NetworkErrorProvider>
        <TimeoutErrorProvider>
          {children}
        </TimeoutErrorProvider>
      </NetworkErrorProvider>
    </LoadingProvider>
  );
}

export default Providers;
