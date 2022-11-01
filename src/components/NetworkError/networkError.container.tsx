import useNetworkError from "../../hooks/useNetworkError.hook";
import NetworkError from "./networkError.component";

function NetworkErrorContainer() {
  const { networkError } = useNetworkError();

  return <>{networkError && <NetworkError />}</>;
}

export default NetworkErrorContainer;
