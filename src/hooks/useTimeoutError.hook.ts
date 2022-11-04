import { useContext } from "react";
import { TimeoutErrorContext } from "../context/timeoutError.context";

export default function useTimeoutError() {
  return useContext(TimeoutErrorContext);
}