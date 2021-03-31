import React from "react";
import Loader from "react-loader-spinner";

export default function Asr() {
  return (
    <>
      <div className="min-h-screen p-5 bg-gray-200 flex flex-col justify-center">
        <div className="max-w-md min-h-1/2 w-full mx-auto">
          <div className="">
            <Loader type="ThreeDots" />
          </div>
        </div>
      </div>
    </>
  );
}
