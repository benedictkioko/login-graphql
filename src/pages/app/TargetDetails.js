import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import Loader from "react-loader-spinner";

export default function TargetDetails() {
  // global state
  const state = useSelector((state) => state.target.target, shallowEqual);

  return (
    <div class="min-h-screen justify-center">
      <div class="flex flex-wrap mt-12 bg-opacity-70 rounded rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg ">
        <div class="w-full xl:w-4/12 mb-12 xl:mb-0 mt-4 px-2">
          <div class="my-4 mx-2 px-2 overflow-hidden bg-white rounded p-4 font-inter text-gray-900 text-xs border-l-4 border-red-800 ">
            <div class="flex flex-row justify-center mt-4 mb-3 ">
              <div class="flex flex-col font-semibold">
                <div class="text-right tracking-wide text-xs ">
                  Target Name:
                </div>
                <div class="text-right tracking-wide text-xs">IP Address:</div>
                <div class="text-right tracking-wide text-xs">Domain:</div>
              </div>
              <div class="flex flex-col">
                <div class="text-left text-xs tracking-wide ml-4 ">
                  {state.name}
                </div>
                <div class="text-left text-xs tracking-wide ml-4 text-green-600">
                  {state.ip}
                </div>
                <div class="text-left text-xs tracking-wide ml-4  ">
                  {state.target}
                </div>
              </div>
            </div>
          </div>
          <div class="my-4 mx-2 px-2 w-auto overflow-hidden bg-white rounded p-4 font-inter text-gray-900 text-xs border-l-4 border-red-800 ">
            <div class="flex flex-row justify-center mt-4">
              <div class="flex flex-col mr-4 mb-3 font-semibold">
                <div class="text-right text-xs tracking-wide ">
                  Country Serving:
                </div>
                <div class="text-right text-xs tracking-wide">Sector:</div>
                <div class="text-right text-xs tracking-wide">ASN:</div>
              </div>
              <div class="flex flex-col">
                <div class="text-left tracking-wide text-xs  ">
                  {state.country.country}
                </div>
                <div class="text-left tracking-wide text-xs text-green-600">
                  {state.sector[0].category}
                </div>
                <div class="text-left tracking-wide text-xs ">{state.asn}</div>
              </div>
            </div>
          </div>
          <div class="my-4 mx-2 px-2 w-auto overflow-hidden bg-white rounded p-4 font-inter text-gray-900 text-xs border-l-4 border-red-800 ">
            <div class="inline-flex text-xs rounded-full bg-red-700 text-white w-16 ml-4 justify-center ">
              INFRA
            </div>
            <div class="flex flex-row justify-center mt-4 mr-16 mb-3 ">
              <div class="flex flex-col mr-4 font-semibold">
                <div class="text-right tracking-wide text-xs ">Subdomains:</div>
                <div class="text-right tracking-wide text-xs ">
                  Name Servers:
                </div>
                <div class="text-right tracking-wide text-xs ">
                  Mail Server:
                </div>
              </div>
              <div class="flex flex-col">
                <div class="text-left tracking-wider text-xs ">
                  {state.subdomainSet.length}
                </div>
                <div class="text-left tracking-wider text-xs text-green-600">
                  {state.dnsserversSet.length}
                </div>
                <div class="text-left tracking-wider text-xs  ">
                  {state.mxrecordsSet.length}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 mt-2 px-4">
          <div class="flex flex-col border-l-2 border-white rounded border-opacity-30 ">
            <div class="flex flex-col mt-4 ml-6 w-120 h-56 ">
              <div class="my-2 mx-2 justify-center overflow-auto bg-white rounded-xl shadow-lg p-4 font-inter text-gray-900 text-xs">
                <span class="text-gray-900 font-semibold">Subdomains</span>
                <div class="flex flex-col justify-center p-4 space-y-2 text-xs text-blue-400">
                  <ul>
                    {state.subdomainSet !== null ? (
                      state.subdomainSet.map((x) => {
                        return (
                          <li
                            key={x.id}
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-1 text-left"
                          >
                            {x.subdomain}
                          </li>
                        );
                      })
                    ) : (
                      <Loader type="ThreeDots" />
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div class="flex flex-col mt-4 ml-6 w-120 h-56 ">
              <div class=" my-2 mx-2  justify-center overflow-auto bg-white rounded-xl shadow-lg p-4 font-inter text-gray-900 text-xs">
                <span class="text-gray-900 font-semibold">Name Servers</span>
                <div class="flex flex-col p-4 space-y-2 text-xs text-blue-400">
                  <ul>
                    {state.dnsserversSet !== null ? (
                      state.dnsserversSet.map((x) => {
                        return (
                          <li
                            key={x.id}
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-1 text-left"
                          >
                            {x.nameserver}
                          </li>
                        );
                      })
                    ) : (
                      <Loader type="ThreeDots" />
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div class="flex flex-col mt-4 ml-6 w-120 h-56 ">
              <div class=" my-2 mx-2  justify-center overflow-auto bg-white rounded-xl shadow-lg p-4 font-inter text-gray-900 text-xs">
                <span class="text-gray-900 font-semibold">Mail Servers</span>
                <div class="flex flex-col p-4 space-y-2 text-xs text-blue-400">
                  <ul>
                    {state.mxrecordsSet !== null ? (
                      state.mxrecordsSet.map((x) => {
                        return (
                          <li
                            key={x.id}
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-1 text-left"
                          >
                            {x.mailserver}
                          </li>
                        );
                      })
                    ) : (
                      <Loader type="ThreeDots" />
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // old
  );
}
