import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { connect, useDispatch } from "react-redux";
import { fetchTarget } from "../../actions/dashAction";

import { GET_TARGETS } from "../../graphql/query/target";

function Dashboard(props) {
  // dispatch actions
  const dispatch = useDispatch();

  const { data, loading } = useQuery(GET_TARGETS, {
    fetchPolicy: "network-only",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("api", data);

  console.log("data", props.isAuthenticated);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center bg-fixed">
      <div></div>
      {/* <ul>
        {data.allTargets.map((x) => {
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
      </ul> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  accessToken: state.auth.accessToken,
});

const mapDispatchoProps = (dispatch) => {
  return {
    allTargets: () => dispatch(fetchTarget()),
  };
};

export default connect(mapStateToProps, mapDispatchoProps)(Dashboard);
