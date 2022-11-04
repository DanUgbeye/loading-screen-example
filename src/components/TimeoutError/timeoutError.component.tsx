import { HourglassClock } from "../../assets/svg";
import Close from "../../assets/svg/close.svg";
import useTimeoutError from "../../hooks/useTimeoutError.hook";
import Backdrop from "../_shared/backdrop.component";

function TimeoutError() {
  const { closeTimeoutError } = useTimeoutError();
  return (
    <Backdrop onClick={closeTimeoutError}>
      <div onClick={(e) => e.stopPropagation()} className=" text-4xl text-gray-400 rounded-lg bg-white min-w-[250px] min-h-[250px] flex flex-col justify-center items-center relative ">
        <button
          onClick={() => closeTimeoutError()}
          className=" absolute top-4 right-4 rounded-full grid place-items-center px-3 py-2 active:bg-gray-200 "
        >
          <Close className=" text-gray-400 w-4 " />
        </button>
        <HourglassClock className=" w-24 text-gray-400 mb-6 bounce-in " />
        <span className=" p-1 rounded-xl text-lg text-gray-400 ">
          Request Timeout
        </span>
      </div>
    </Backdrop>
  );
}

export default TimeoutError;
