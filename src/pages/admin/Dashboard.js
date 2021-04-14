import React, { useEffect, useCallback, useRef } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useDispatch, shallowEqual, useSelector } from "react-redux";

//actions
import {
  dashStats,
  fetchSectors,
  fetchCountries,
  statsCountries,
} from "../../actions/dashAction";

// components
import CountryStats from "../../components/Cards/CountryStats";
import AsnPortStats from "../../components/Cards/AsnPortStats";

// graphql
import { DASH_STATS } from "../../graphql/query/target";
import {
  GET_SECTORS,
  GET_COUNTRIES,
  GET_COUNTRIES_STATS,
} from "../../graphql/query/dashboard";

function Dashboard(props) {
  // dispatch actions
  const dispatch = useDispatch();
  // global state
  const state = useSelector((state) => state.dashboard, shallowEqual);

  // dash stats
  const { data, error, loading } = useQuery(DASH_STATS, {
    fetchPolicy: "network-only",
  });

  // fetch sectors
  const {
    data: sectorData,
    error: sectorError,
    loading: sectorLoading,
  } = useQuery(GET_SECTORS, {
    fetchPolicy: "network-only",
    onCompleted: (sectorData) => {
      console.log(sectorData);
      state?.sectors === null &&
        dispatch(fetchSectors(sectorData.allCategories));
    },
  });

  // fetch countries
  const {
    data: countryData,
    error: countryError,
    loading: countryLoading,
  } = useQuery(GET_COUNTRIES, {
    fetchPolicy: "network-only",
    onCompleted: (countryData) => {
      console.log(countryData);
      state?.countries === null &&
        dispatch(fetchCountries(countryData.allCountries));
    },
  });

  // country stats
  const {
    data: statsData,
    error: statsError,
    loading: statsLoading,
  } = useQuery(GET_COUNTRIES_STATS, {
    fetchPolicy: "network-only",
    onCompleted: (statsData) => {
      console.log(statsData);
      state?.stats === null && dispatch(statsCountries(statsData));
    },
  });

  useEffect(() => {
    if (state.dashStats === null && data) {
      // console.log("hello", data);
      dispatch(dashStats(data?.dashStats));
      // dispatch(fetchSectors());
      // dispatch(fetchCountries());
    }
  }, [data, state.dashStats, dispatch]);

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
