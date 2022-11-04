import { useContext } from "react";
import { NetworkErrorContext } from "../context/networkError.context";

export default function useNetworkError() {
  return useContext(NetworkErrorContext);
}