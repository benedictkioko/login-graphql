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
      n: 50,
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
