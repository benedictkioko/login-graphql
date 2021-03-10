import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// actions
import { fetchTarget } from "../../actions/dashAction";

// graphql
import { GET_TARGETS } from "../../graphql/query/target";

// components
import Search from "../../components/Forms/Search";
import TargetDefination from "../../components/Forms/TargetDefination";

function Target() {
  const dispatch = useDispatch();

  const { data, loading } = useQuery(GET_TARGETS, {
    fetchPolicy: "network-only",
    variables: {
      n: 10,
      offset: 0,
      search: "",
    },
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
      <div className="min-h-screen flex flex-col justify-center">
        <div className="w-full mx-auto">
          <div className="items-center">
            <Search />

            {/* Search Results Table */}
            <div className="flex flex-col">
              <h1 className="font-bold text-sm text-green-600 pb-4">
                Search results..
              </h1>

              <div className="shadow overflow-hidden overflow-x-auto border-b border-gray-200 sm:rounded-lg">
                <div className="">
                  <table className="w-full divide-y divide-gray-200">
                    <thead className="bg-white py-4">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Domain
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          IP
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {targetData?.map((x) => {
                        console.log("text");
                        return (
                          <tr
                            key={x.id}
                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                          >
                            {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {x.id}
                              </td>{" "} */}
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {x.name}{" "}
                            </td>{" "}
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {x.target}
                            </td>{" "}
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {x.ip}
                            </td>{" "}
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              {x.status}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Link
                                to=""
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                Edit
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  {/* Pagination */}
                  <div className="px-5 py-5 border-t flex flex-col xs:flex-row items-center xs:justify-between mt-4 mb-6">
                    <span className="text-sm xs:text-sm text-bold text-gray-900">
                      Showing 1 to 10 of 50 Entries
                    </span>
                    <div className="inline-flex mt-2 xs:mt-0">
                      <button className="border border-teal-500 text-teal-500 block rounded-sm font-bold py-2 px-6 mr-2 flex items-center hover:bg-teal-500 hover:text-white">
                        <svg
                          className="h-5 w-5 mr-2 fill-current"
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="-49 141 512 512"
                        >
                          <path
                            id="XMLID_10_"
                            d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"
                          ></path>
                        </svg>
                        Previous page
                      </button>
                      <button className="border border-teal-500 bg-teal-500 text-white block rounded-sm font-bold py-2 px-6 ml-2 flex items-center">
                        Next page
                        <svg
                          className="h-5 w-5 ml-2 fill-current"
                          clasversion="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="-49 141 512 512"
                        >
                          <path
                            id="XMLID_11_"
                            d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
              l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
              c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-center mt-4">
              <TargetDefination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Target;
