import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";

// actions
import { fetchTarget } from "../../actions/dashAction";

// graphql
import { GET_TARGETS } from "../../graphql/query/target";

// components
import Search from "../../components/Forms/Search";
import TargetDefination from "../../components/Forms/TargetDefination";
import Header from "../../components/Tables/SearchResults/Header";
import Body from "../../components/Tables/SearchResults/Body";

function Target() {
  // set the local state
  const [targets, setTargets] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const targetPerPage = 10;
  const pagesVisted = pageNumber * targetPerPage;

  // get data from graphql
  const { data, loading } = useQuery(GET_TARGETS, {
    fetchPolicy: "network-only",
    variables: {
      n: 100,
      offset: 0,
      search: "",
    },
  });

  useEffect(() => {
    if (!loading && data) {
      setTargets(data?.allTargets);
    }
  }, [data, loading]);

  // const targetData = data?.allTargets;
  // console.log("Targets", targetData);

  const displayTargets = targets
    .slice(pagesVisted, pagesVisted + targetPerPage)
    .map((target) => {
      return <Body data={target} />;
    });

  const pageCount = Math.ceil(targets.length / targetPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      {loading && <div>Loading...</div>}
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
                {/* table */}
                {/* <SearchResults data={targets} /> */}
                <table className="w-full divide-y divide-gray-200">
                  <Header />
                  {displayTargets}
                </table>
                {/* Pagination */}
                <div className="px-5 py-5 border-t flex flex-col sm:hidden xs:flex-row items-center xs:justify-between mt-4 mb-6">
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
                        "disabled mx-2 bg-teal-200 text-white hover:text-white"
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
