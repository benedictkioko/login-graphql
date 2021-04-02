import React, { useEffect, useState, useCallback } from "react";
import { useLazyQuery } from "@apollo/client";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import ReactPaginate from "react-paginate";
import Loader from "react-loader-spinner";

// actions
import { fetchTarget } from "../../actions/asrAction";
// graphql
import {
  GET_TARGETS,
  GET_SEARCH_ENGINE_RESULTS,
} from "../../graphql/query/target";

// components
import Search from "../../components/Forms/Search";
import TargetDefination from "../../components/Forms/TargetDefination";
import Header from "../../components/Tables/SearchResults/Header";
import Body from "../../components/Tables/SearchResults/Body";
import { toast } from "react-toast";

function Asr() {
  const dispatch = useDispatch();

  // global state
  const state = useSelector((state) => state.asr, shallowEqual);
  const errorStore = useSelector((state) => state.error, shallowEqual);

  const [showModal, setShowModal] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const targetPerPage = 10;
  const pagesVisted = pageNumber * targetPerPage;

  // query our storage
  const { data, loading, error } = useQuery(GET_TARGETS, {
    variables: {
      search: "",
      n: 100,
      offset: 0,
    },
    fetchPolicy: "network-only",
  });

  // search engine results
  const [searchResults] = useLazyQuery(GET_SEARCH_ENGINE_RESULTS, {
    variables: {
      search: state.search,
    },
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      console.log("serach engine", data);
    },
  });

  useEffect(() => {
    if (state.allTargets === null && data) {
      dispatch(fetchTarget(data));
      toast.success("Data loaded!");
    }
  }, [state.allTargets, data, dispatch]);

  // handleToggle to Search Engine
  // handle submit
  const handleToggle = (e) => {
    e.preventDefault();
    searchResults();
  };

  // sorting
  // function dynamicSort(a, b) {
  //   if (a.name < b.name) {
  //     return -1;
  //   }
  //   if (a.name > b.name) {
  //     return 1;
  //   }
  //   return 0;
  // }

  const displayTargets =
    state.allTargets !== null
      ? state.allTargets
          // .sort(dynamicSort)
          .slice(pagesVisted, pagesVisted + targetPerPage)
          .map((target) => {
            return <Body key={target.id} data={target} />;
          })
      : "";

  const pageCount = Math.ceil(state.allTargets?.length / targetPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="min-h-screen flex flex-wrap content-center">
        <div className="w-full mx-auto">
          <div className="items-center">
            {/* Search Form */}
            <Search />
            {/* Show data */}
            {errorStore.message === null ? (
              <div className="flex flex-col justify-center">
                {state.allTargets === null ? (
                  <div className="flex justify-center">
                    <Loader type="ThreeDots" />
                  </div>
                ) : (
                  <>
                    <h1 className="font-bold text-sm text-green-600 pb-4">
                      Search results for{" "}
                      {state.search === null ? "initial load" : state.search}..
                    </h1>
                    {/* Search Results Table */}
                    <div className="shadow overflow-hidden overflow-x-auto border-b border-gray-200 sm:rounded-lg">
                      {/* <SearchResults data={targets} /> */}
                      <table className="w-full divide-y divide-gray-200">
                        <Header />
                        {displayTargets && displayTargets}
                      </table>
                      {/* Pagination */}

                      <div className="px-5 py-5 border-t flex flex-col xs:flex-row items-center xs:justify-between mt-4 mb-6">
                        <div className="inline-flex mt-2 xs:mt-0">
                          <ReactPaginate
                            previousLabel={"Previous page"}
                            nextLabel={"Next page"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={
                              "flex rounded-sm font-bold py-2 px-2 mx-4 items-center"
                            }
                            previousLinkClassName={
                              "border border-teal-500 text-teal-500 block rounded-sm font-bold py-2 px-4 flex items-center hover:bg-teal-500 hover:text-white"
                            }
                            nextLinkClassName={
                              "border border-teal-500 text-teal-500 block rounded-sm font-bold py-2 px-4 flex items-center hover:bg-teal-500 hover:text-white"
                            }
                            disabledClassName={
                              "disabled mx-2 bg-gray-100 text-white hover:text-white cursor-not-allowed"
                            }
                            pageLinkClassName={
                              "border border-teal-500 text-gray-900 block rounded-sm font-normal py-2 px-4 mx-2 flex items-center hover:bg-teal-500 hover:text-white"
                            }
                            activeLinkClassName={
                              "border border-teal-500 bg-teal-500 text-white block rounded-sm font-bold py-2 px-2 ml-2"
                            }
                          />
                          <div className=" flex flex-col mt-2">
                            <button className="inline-flex items-center justify-center w-100 h-10 mr-2 px-4 text-indigo-100 transition-colors duration-150 bg-teal-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                              Add New Target
                              <svg
                                className="w-4 h-4 fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                  clipRule="evenodd"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <>
                <button className="flex justify-center">
                  Show search Engine Results
                </button>
                <div className="items-center mt-4">
                  <TargetDefination />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Asr;
