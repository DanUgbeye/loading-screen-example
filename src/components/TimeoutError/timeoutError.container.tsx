import useTimeoutError from "../../hooks/useTimeoutError.hook";
import TimeoutError from "./timeoutError.component";

function TimeoutErrorContainer() {
  const { timeoutError } = useTimeoutError();

  return <>{timeoutError && <TimeoutError />}</>;
}

export default TimeoutErrorContainer;
