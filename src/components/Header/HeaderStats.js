import React, { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";

// components

import CardStats from "../Cards/CardStats.js";

function HeaderStats(props) {
  const state = useSelector((state) => state, shallowEqual);

  useEffect(() => {
    if (state) {
      console.log("header", state.dashboard.totalCountries);
    }
  }, [state]);

  return (
    <>
      {/* Header */}
      <div className="relative bg-gradient-to-tr from-gray-900 to-red-500 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="COUNTRIES"
                  statTitle={state.dashboard.totalCountries.toLocaleString()}
                  statIconName="fas fa-map-marker-alt"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TARGETS"
                  statTitle={state.dashboard.totalTargets.toLocaleString()}
                  statIconName="fas fa-network-wired"
                  statIconColor="bg-red-400"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="DOMAINS"
                  statTitle={state.dashboard.totalDomains.toLocaleString()}
                  statIconName="fas fa-sitemap"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="SERVICES"
                  statTitle={state.dashboard.totalServices.toLocaleString()}
                  statIconName="fas fa-server"
                  statIconColor="bg-green-500"
                />
              </div>
            </div>
            <div className="w-full flex flex-wrap p-4">
              <p className="text-2xl text-white py-4">
                Currently Analyzing
                <span className="text-green-600 text-2xl py-4">
                  {" "}
                  2,756,463{" "}
                </span>
                ASSETS
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderStats;
