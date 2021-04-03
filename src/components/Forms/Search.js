import { useLazyQuery } from "@apollo/client";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import Loader from "react-loader-spinner";

// form hook
import useForm from "../../constants/useForm";

// graphql
import { GET_TARGETS } from "../../graphql/query/target";

// action
import { errMsg, resetErrors } from "../../actions/errorAction";
import {
  fetchTarget,
  resetQuery,
  setSearchQuery,
} from "../../actions/asrAction";

export default function Form() {
  const dispatch = useDispatch();
  // state
  const state = useSelector((state) => state.asr, shallowEqual);
  const errorStore = useSelector((state) => state.error, shallowEqual);

  // initialization
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    search: "",
  });

  const [allTargets, { data, loading, error }] = useLazyQuery(GET_TARGETS, {
    variables: {
      search: inputs.search,
      n: 100,
      offset: 0,
    },
    onCompleted: (data) => {
      dispatch(resetQuery());
      errorStore.message && dispatch(resetErrors());
      dispatch(setSearchQuery(inputs.search));
      dispatch(fetchTarget(data));
    },
    onError: (error) => {
      dispatch(setSearchQuery(inputs.search));
      dispatch(errMsg(error));
    },
  });

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    allTargets();
  };

  console.log("render..");
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-center">
          <div className="container mx-24rounded  px-4">
            <div className="px-6 py-2">
              <div className="text-center mb-2">
                <h1 className="text-sm font-medium text-gray-900 leading-loose">
                  Search for an entity
                </h1>
                <div className="text-center py-2">
                  <form onSubmit={handleSubmit}>
                    <div className=" max-w-md mx-auto p-1 pr-0 flex items-center">
                      <input
                        type="text"
                        name="search"
                        value={inputs.search}
                        placeholder={
                          state.search
                            ? state.search
                            : "search here #target.com"
                        }
                        onChange={handleChange}
                        className="flex-1 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded shadow p-2 text-grey-dark mr-2 focus:outline-none focus:bg-white focus:border-gray-500"
                      />
                      <button
                        type="submit"
                        className="appearance-none bg-teal-700 text-white hover:bg-teal-800 text-md font-semibold tracking-wide uppercase p-2 rounded shadow hover:bg-indigo-light"
                      >
                        Search
                      </button>
                    </div>
                    {/* <div className="flex justify-center mt-4">
                      <button
                        type="button"
                        className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        aria-pressed="false"
                        aria-labelledby="annual-billing-label"
                      >
                        <span className="sr-only">Use setting</span>
                        <span
                          aria-hidden="true"
                          className="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        ></span>
                      </button>
                      <span className="ml-3" id="annual-billing-label">
                        <span className="text-sm font-medium text-gray-900">
                          View search engine results{" "}
                        </span>
                        <span className="text-sm text-gray-500">(Google)</span>
                      </span>
                    </div> */}
                    {loading && (
                      <div className="flex justify-center">
                        <Loader type="ThreeDots" />
                      </div>
                    )}
                    {errorStore ? (
                      <div className=" text-red-500 italic font-sm my-4">
                        <span>{errorStore.message}</span>
                      </div>
                    ) : (
                      ""
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
