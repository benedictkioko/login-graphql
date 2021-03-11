import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { setSearchQuery } from "../../actions/dashAction";

export default function Form() {
  const dispatch = useDispatch();
  const [searchQuery, setSearch] = useState("");
  const handleSearchChanged = (event) => {
    const searchQuery = event?.target?.value;
    // setSearch(searchQuery);
  };

  // const handleSearchKeyUp = () => {
  //   console.log("SEARC", searchQuery);
  //   dispatch(setSearchQuery(searchQuery));
  // };

  return (
    <>
      <div class="w-full">
        <div class="flex items-center justify-center">
          <div class="container mx-24rounded  px-4">
            <div class="px-6 py-6">
              <div class="text-center mb-2">
                <h1 class="font-bold text-sm text-grey-darkest leading-loose">
                  Search for a target
                </h1>
                <div class="text-center py-4">
                  <form action="#">
                    <div class=" max-w-md mx-auto p-1 pr-0 flex items-center">
                      <input
                        type="text"
                        placeholder="target.com"
                        class="flex-1 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded shadow p-2 text-grey-dark mr-2 focus:outline-none focus:bg-white focus:border-gray-500"
                      />
                      <button
                        type="submit"
                        class="appearance-none bg-teal-500 text-white hover:bg-teal-800 text-md font-semibold tracking-wide uppercase p-2 rounded shadow hover:bg-indigo-light"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
