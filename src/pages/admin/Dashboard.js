import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useDispatch, shallowEqual, useSelector } from "react-redux";

// components
import CountryStats from "../../components/Cards/CountryStats";
import AsnPortStats from "../../components/Cards/AsnPortStats";

// graphql
import { DASH_STATS } from "../../graphql/query/target";

function Dashboard(props) {
  // dispatch actions
  const dispatch = useDispatch();

  const { data, loading } = useQuery(DASH_STATS, {
    fetchPolicy: "network-only",
  });

  const state = useSelector((state) => state, shallowEqual);

  useEffect(() => {
    if (state) {
      console.log("countries", state.dashboard.totalCountries);
    }
  }, [state]);

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
