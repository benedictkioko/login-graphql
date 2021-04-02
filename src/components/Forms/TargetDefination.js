import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toast";

// custom hook
import useForm from "../../constants/useForm";

// graphql
import { CREATE_TARGET_MUTATION } from "../../graphql/mutation/target";
import { errMsg } from "../../actions/errorAction";

function TargetDefination() {
  const dispatch = useDispatch();

  // initialization
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    name: "",
    target: "",
    sector: {
      id: null,
    },
    ip: "",
    country: {
      id: null,
    },
    notes: "",
    status: "Up",
    lat: 0,
    lng: 0,
  });

  const [createTarget, { data, loading, error }] = useMutation(
    CREATE_TARGET_MUTATION,
    {
      variables: {
        search: inputs.search,
        n: 100,
        offset: 0,
      },
      onCompleted: (data) => {},
      onError: (error) => {
        dispatch(errMsg(error));
      },
    }
  );

  return (
    <>
      <div className="w-full">
        <h1 className="font-bold text-sm text-green-600 leading-loose pb-4">
          Add Target
        </h1>
        <div className="items-center justify-center">
          <div className="container bg-white rounded-md shadow-lg px-4 mr-4">
            <div className="px-12 py-6">
              <div className="text-center mb-4">
                <div className="max-w-md items-center text-left py-4">
                  <form action="#">
                    <div className="-mx-3 md:flex mb-6">
                      <div className="md:w-full px-3">
                        <label
                          className="block uppercase tracking-wide text-grey-darker text-xs font-bold pb-4"
                          htmlFor="grid-password"
                        >
                          Entity
                        </label>
                        <input
                          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-password"
                          type="text"
                          placeholder=""
                        />
                        <p className="text-grey-dark text-xs italic">
                          Entity name must be unique.
                        </p>
                      </div>
                    </div>
                    <div className="-mx-3 md:flex  py-2">
                      <div className="md:w-1/2 px-3  md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-grey-darker text-xs font-bold pb-4"
                          htmlFor="grid-first-name"
                        >
                          Domain
                        </label>
                        <input
                          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-2 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-first-name"
                          type="text"
                          placeholder="domain.com"
                        />
                      </div>
                      <div className="md:w-1/2 px-3">
                        <label
                          className="block uppercase tracking-wide text-grey-darker text-xs font-bold pb-4"
                          htmlFor="grid-last-name"
                        >
                          IP Address{" "}
                          <span className="text-sm italic text-gray-500">
                            (Optional)
                          </span>
                        </label>
                        <input
                          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="text"
                          placeholder="192.168.0.1"
                        />
                      </div>
                    </div>
                    {/* sector */}
                    <div className="-mx-3 md:flex mb-6">
                      <div className="md:w-full px-3">
                        <label
                          className="block uppercase tracking-wide text-grey-darker text-xs font-bold pb-4"
                          htmlFor="grid-state"
                        >
                          Sector
                        </label>
                        <div className="relative">
                          <select className="appearance-none h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>-Choose-</option>
                            <option>Agriculture</option>
                            <option>Banking</option>
                            <option>ICT</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 m-4 text-gray-700">
                            <svg
                              className="fill-current h-4 w-4"
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
                    <div className="-mx-3 md:flex mb-2">
                      <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 pb-4"
                          htmlFor="grid-city"
                        >
                          City
                        </label>
                        <input
                          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-4"
                          id="grid-city"
                          type="text"
                          placeholder="Nairobi"
                        />
                      </div>

                      <div className="md:w-1/2 px-3">
                        <label
                          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 pb-4"
                          htmlFor="grid-state"
                        >
                          Country
                        </label>
                        <div className="relative">
                          <select className="appearance-none h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>-Choose-</option>
                            <option>Uganda</option>
                            <option>Kenya</option>
                            <option>Somalia</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 m-4 text-gray-700">
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="-mx-3 md:flex  py-4">
                      <div className="md:w-full px-3">
                        <label
                          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 pb-4"
                          htmlFor="grid-password"
                        >
                          Notes
                        </label>

                        <textarea
                          className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
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
                          className="appearance-none bg-red-600 text-white hover:bg-red-600 text-base font-semibold tracking-wide uppercase p-2 rounded shadow hover:bg-indigo-light"
                        >
                          Cancel
                        </button>
                      </div>
                      <div className="md:w-1/2 px-3  md:mb-0">
                        <button
                          type="submit"
                          className="appearance-none bg-gray-900 text-white hover:bg-gray-600 text-base font-semibold tracking-wide uppercase p-2 rounded shadow hover:bg-indigo-light"
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

// function getGEO(domain, target, defineTarget, context) {
function getGEO(domain) {
  var url = "https://api.hackertarget.com/geoip/?q=" + domain;
  return fetch(url)
    .then((response) => response.text())
    .then((text) => {
      var str = text.replace(/\r\n/g, "\r").replace(/\n/g, "\r").split(/\r/);
      var lat = str[4].split(" ")[1];
      var lng = str[5].split(" ")[1];
      // defineTarget({ ...target, lat: lat, lng: lng });
    })
    .catch((e) => toast.error("error", "Unable to get targets location"));
}

export default TargetDefination;
