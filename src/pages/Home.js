import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { connect } from "react-redux";
import HeaderStats from "../components/Header/HeaderStats";

import { GET_TARGETS } from "../graphql/query/target";

function Home(props) {
  const { data, loading } = useQuery(GET_TARGETS, {
    fetchPolicy: "network-only",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("data", props.isAuthenticated);
  return (
    <div className="min-h-screen p-5 bg-gray-50 flex flex-col justify-center bg-fixed">
      <h2 className="text-3xl font-bold text-gray-900 mt-2 text-center">
        <HeaderStats />
      </h2>
      <div>Targets</div>
      <ul>
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
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  accessToken: state.auth.accessToken,
});

export default connect(mapStateToProps)(Home);
