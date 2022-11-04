import Spinner from "../_shared/spinner.component";
import Backdrop from "../_shared/backdrop.component";

function Loading() {
  return (
    <Backdrop>
      <div className=" text-4xl text-gray-400 rounded-lg bg-white min-w-[250px] min-h-[250px] grid place-items-center relative ">
        <Spinner />
        <span className=" absolute p-1 rounded-xl font-[500] text-lg fade text-gray-400 ">
          loading
        </span>
      </div>
    </Backdrop>
  );
}

export default Loading;
