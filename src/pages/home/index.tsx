import React from "react";
import useLoading from "../../hooks/useLoading.hook";
import useNetworkError from "../../hooks/useNetworkError.hook";
import useTimeoutError from "../../hooks/useTimeoutError.hook";

function Home() {
  const { openLoading } = useLoading();
  const { openNetworkError } = useNetworkError();
  const { openTimeoutError } = useTimeoutError();

  return (
    <section className=" min-h-[100vh]  p-6">
      <h1 className=" text-2xl font-semibold text-gray-500 font-[Helvetica] mb-8 text-center " >MODAL EXAMPLES</h1>
      <div className=" grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] grid-rows-[repeat(1,minmax(0,_250px))] gap-x-6 gap-y-6 justify-center mb-8 ">
        <div className=" slide-in-left w-full max-w-lg mx-auto bg-blue-400/20 rounded-lg h-fit p-8 min-h-[250px] flex flex-col justify-center ">
          <h1 className=" text-2xl font-regular text-gray-500 text-center mb-6">
            Loading
          </h1>

          <button
            onClick={() => openLoading()}
            className=" bg-blue-400 p-2 rounded-md text-white flex mx-auto hover:bg-blue-400/80 hover:shadow-md transition-all "
          >
            Show Loading
          </button>
        </div>

        <div className=" slide-in-right w-full max-w-lg mx-auto bg-orange-400/20 rounded-lg h-fit p-8 min-h-[250px] flex flex-col justify-center ">
          <h1 className=" text-2xl font-regular text-gray-500 text-center mb-6">
            Network error
          </h1>

          <button
            onClick={() => openNetworkError()}
            className=" bg-orange-400 p-2 rounded-md text-white flex mx-auto hover:bg-orange-400/80 hover:shadow-md transition-all "
          >
            Show Network error
          </button>
        </div>

        <div className=" slide-in-left w-full max-w-lg mx-auto bg-violet-400/20 rounded-lg h-fit p-8 min-h-[250px] flex flex-col justify-center ">
          <h1 className=" text-2xl font-regular text-gray-500 text-center mb-6">
            Timeout error
          </h1>

          <button
            onClick={() => openTimeoutError()}
            className=" bg-violet-400 p-2 rounded-md text-white flex mx-auto hover:bg-violet-400/80 hover:shadow-md transition-all "
          >
            Show Timeout error
          </button>
        </div>

      </div>
    </section>
  );
}

export default Home;
