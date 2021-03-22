import React, { useEffect, useState, useRef } from "react";
import { useLazyQuery } from "@apollo/client";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

// actions
import { fetchTarget } from "../../actions/targetAction";

// graphql
import { GET_TARGETS } from "../../graphql/query/target";

// components
import Search from "../../components/Forms/Search";
import TargetDefination from "../../components/Forms/TargetDefination";
import Header from "../../components/Tables/SearchResults/Header";
import Body from "../../components/Tables/SearchResults/Body";

function Target() {
  const dispatch = useDispatch();

  // global state
  const targetState = useSelector((state) => state.targets, shallowEqual);

  let [pageNumber, setPageNumber] = useState(1);
  let displayTargets = useRef([]);
  let pageCount = useRef(1);
  const targetPerPage = 10;
  const pagesVisted = pageNumber * targetPerPage;
  let [targetLoaded, setTargetLoaded] = useState(false);
  let [allTargets, { data, loading, error }] = useLazyQuery(GET_TARGETS, {
    variables: {
      search: "",
      n: 100,
      offset: 0,
    },
    onCompleted: (data) => {
      console.log("data ", data);
      dispatch(fetchTarget(data));
    },
  });

  useEffect(() => {
    allTargets();
  }, [allTargets]);

  useEffect(() => {
    if (
      Array.isArray(targetState.allTargets) &&
      !targetLoaded &&
      targetState.allTargets.length > 0
    ) {
      // targetState.allTargets.sort(function (a, b) {
      //   var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      //   var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      //   if (nameA < nameB) {
      //     return -1;
      //   }
      //   if (nameA > nameB) {
      //     return 1;
      //   }
      //   // names must be equal
      //   return 0;
      // });
      displayTargets.current = targetState.allTargets
        .slice(pagesVisted, pagesVisted + targetPerPage)
        .map((target) => {
          return <Body key={target.id} data={target} />;
        });
      pageCount.current = Math.ceil(
        targetState.allTargets.length / targetPerPage
      );
      setTargetLoaded(true);
      console.log("TARGETS: ", displayTargets.current);
      console.log("PAGE COUNT: ", pageCount.current);
    }
  }, [targetState.allTargets, targetLoaded, pageNumber, pagesVisted]);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    displayTargets.current = targetLoaded
      ? targetState.allTargets.length > 0 &&
        targetState.allTargets
          .slice(pagesVisted, pagesVisted + targetPerPage)
          .map((target) => {
            return <Body key={target.id} data={target} />;
          })
      : [...displayTargets.current];
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center">
        <div className="w-full mx-auto">
          <div className="items-center">
            {/* Search Form */}
            <Search />
            {/* Search Results Table */}
            <div className="flex flex-col">
              <h1 className="font-bold text-sm text-green-600 pb-4">
                Search results..
              </h1>

              <div className="shadow overflow-hidden overflow-x-auto border-b border-gray-200 sm:rounded-lg">
                {/* <SearchResults data={targets} /> */}
                {targetLoaded ? (
                  <>
                    <table className="w-full divide-y divide-gray-200">
                      <Header />
                      {displayTargets.current}
                    </table>
                    {/* pagination */}
                    <div className="px-5 py-5 border-t flex flex-col xs:flex-row items-center xs:justify-between mt-4 mb-6">
                      <div className="inline-flex mt-2 xs:mt-0">
                        <ReactPaginate
                          previousLabel={"Previous page"}
                          nextLabel={"Next page"}
                          pageCount={pageCount.current}
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
                            "appearance-none mx-2 bg-gray-300 text-white hover:text-white"
                          }
                          pageLinkClassName={
                            "border border-teal-500 text-gray-900 block rounded-sm font-normal py-2 px-4 mx-2 flex items-center hover:bg-teal-500 hover:text-white"
                          }
                          activeLinkClassName={
                            "border border-teal-500 bg-teal-500 text-white block rounded-sm font-bold py-2 px-2 ml-2"
                          }
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <div>Loading...</div>
                )}
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
