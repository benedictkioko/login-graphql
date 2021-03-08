import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { connect, useDispatch } from "react-redux";
import { fetchTarget } from "../../actions/dashAction";

import { GET_TARGETS } from "../../graphql/query/target";
import CountryStats from "../../components/Cards/CountryStats";
import AsnPortStats from "../../components/Cards/AsnPortStats";

function Dashboard(props) {
  // dispatch actions
  const dispatch = useDispatch();

  const { data, loading } = useQuery(GET_TARGETS, {
    fetchPolicy: "network-only",
    // variables: {
    //   n: 50,
    //   offset: 0,
    //   search: "",
    // },
  });

  const targetData = data?.allTargets;

  console.log("api", targetData);

  // console.log("data", props.isAuthenticated);

  // useEffect(() => {

  // }, []);

  const handleClickMeClicked = () => {
    const variables = {
      n: 50,
      offset: 0,
    };
    dispatch(fetchTarget(variables));
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CountryStats />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <AsnPortStats />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          {/* <CardPageVisits /> */}
          <ul>
            {targetData?.map((x) => {
              return (
                <li
                  key={x.id}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {" "}
                  {x.id} | {x.name} | {x.target} | {x.ip}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full xl:w-4/12 px-4">
          {/* <CardSocialTraffic /> */}
        </div>
        <div onClick={handleClickMeClicked}>Pagination</div>
        <div onClick={handleClickMeClicked}>Search</div>
      </div>
    </>
  );
}

export default Dashboard;
