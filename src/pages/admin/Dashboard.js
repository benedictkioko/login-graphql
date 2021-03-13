import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useDispatch } from "react-redux";

//actions
import { dashStats } from "../../actions/dashAction";

// components
import CountryStats from "../../components/Cards/CountryStats";
import AsnPortStats from "../../components/Cards/AsnPortStats";

// graphql
import { DASH_STATS } from "../../graphql/query/target";

function Dashboard() {
  // dispatch actions
  const dispatch = useDispatch();

  const { data, error, loading } = useQuery(DASH_STATS, {
    fetchPolicy: "network-only",
  });

  console.log(data, error, loading);

  useEffect(() => {
    // check whether data exists
    if (!loading && data) {
      dispatch(dashStats(data?.dashStats));
    }
  }, [data, loading, dispatch]);

  if (loading) return <p className="text-blue-500">Loading...</p>;
  if (error) return <div>Error: {error.message}</div>;
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
