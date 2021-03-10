import React, { useEffect } from "react";

import CountryStats from "../../components/Cards/CountryStats";
import AsnPortStats from "../../components/Cards/AsnPortStats";

function Dashboard(props) {
  // dispatch actions

  return (
    <>
      <div className="min-h-screen flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CountryStats />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <AsnPortStats />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4"></div>
        <div className="w-full xl:w-4/12 px-4">
          {/* <CardSocialTraffic /> */}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
