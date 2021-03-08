import React from "react";

export default function Form() {
  return (
    <>
      <form className="flex flex-row flex-wrap items-center lg:ml-auto mr-3">
        <div className="relative flex w-full flex-wrap items-stretch">
          <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
            <i className="fas fa-search"></i>
          </span>
          <input
            type="text"
            placeholder="Search here..."
            className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
          />
          <div className="py-4 justify-center">
            <p>Search for an asset record</p>
          </div>
        </div>
      </form>
    </>
  );
}
