import React from "react";
import { Link } from "react-router-dom";

export default function TargetDefination() {
  return (
    <>
      <div class="w-full">
        <h1 class="font-bold text-sm text-green-600 leading-loose my-3 pb-4">
          Add Target
        </h1>
        <div class="items-center justify-center">
          <div class="container bg-white rounded-md shadow-lg px-4 mr-4">
            <div class="px-12 py-6">
              <div class="text-center mb-4">
                <div class="max-w-md items-center text-left py-4">
                  <form action="#">
                    <div class="-mx-3 md:flex mb-6">
                      <div class="md:w-full px-3">
                        <label
                          class="block uppercase tracking-wide text-grey-darker text-xs font-bold pb-4"
                          for="grid-password"
                        >
                          Entity
                        </label>
                        <input
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-password"
                          type="text"
                          placeholder=""
                        />
                        <p class="text-grey-dark text-xs italic">
                          Entity name must be unique.
                        </p>
                      </div>
                    </div>
                    <div class="-mx-3 md:flex  py-2">
                      <div class="md:w-1/2 px-3  md:mb-0">
                        <label
                          class="block uppercase tracking-wide text-grey-darker text-xs font-bold pb-4"
                          for="grid-first-name"
                        >
                          Domain
                        </label>
                        <input
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-2 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-first-name"
                          type="text"
                          placeholder="domain.com"
                        />
                      </div>
                      <div class="md:w-1/2 px-3">
                        <label
                          class="block uppercase tracking-wide text-grey-darker text-xs font-bold pb-4"
                          for="grid-last-name"
                        >
                          IP Address
                        </label>
                        <input
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="text"
                          placeholder="192.168.0.1"
                        />
                      </div>
                    </div>
                    {/* sector */}
                    <div class="-mx-3 md:flex mb-6">
                      <div class="md:w-full px-3">
                        <label
                          class="block uppercase tracking-wide text-grey-darker text-xs font-bold pb-4"
                          for="grid-state"
                        >
                          Sector
                        </label>
                        <div class="relative">
                          <select class="appearance-none h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>-Choose-</option>
                            <option>Agriculture</option>
                            <option>Banking</option>
                            <option>ICT</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 m-4 text-gray-700">
                            <svg
                              class="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* country */}
                    <div class="-mx-3 md:flex mb-2">
                      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 pb-4"
                          for="grid-city"
                        >
                          City
                        </label>
                        <input
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-4"
                          id="grid-city"
                          type="text"
                          placeholder="Nairobi"
                        />
                      </div>

                      <div class="md:w-1/2 px-3">
                        <label
                          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 pb-4"
                          for="grid-state"
                        >
                          Country
                        </label>
                        <div class="relative">
                          <select
                            class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-2 px-4 pr-8 rounded"
                            id="grid-state"
                          >
                            <option>-Choose-</option>
                            <option>Uganda</option>
                            <option>Kenya</option>
                            <option>Somalia</option>
                          </select>
                          <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                            <svg
                              class="h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="-mx-3 md:w-full  py-4">
                      <div class="md:w-1/2 px-3  md:mb-0">
                        <label
                          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 pb-4"
                          for="grid-password"
                        >
                          Notes
                        </label>

                        <textarea
                          class="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                          id="message"
                          type="text"
                          placeholder="Notes..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-between mt-6 relative">
                      <div className="md:w-1/2 px-3  md:mb-0">
                        <button
                          type="submit"
                          class="appearance-none bg-red-600 text-white hover:bg-red-600 text-base font-semibold tracking-wide uppercase p-2 rounded shadow hover:bg-indigo-light"
                        >
                          Cancel
                        </button>
                      </div>
                      <div className="md:w-1/2 px-3  md:mb-0">
                        <button
                          type="submit"
                          class="appearance-none bg-gray-900 text-white hover:bg-gray-600 text-base font-semibold tracking-wide uppercase p-2 rounded shadow hover:bg-indigo-light"
                        >
                          Submit
                        </button>
                      </div>
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
