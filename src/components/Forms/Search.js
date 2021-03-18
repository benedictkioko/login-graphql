import { useLazyQuery } from "@apollo/client";
import { useDispatch, shallowEqual, useSelector } from "react-redux";

// form hook
import useForm from "../../constants/useForm";

// graphql
import { GET_TARGETS } from "../../graphql/query/target";

// action
import { fetchTarget } from "../../actions/targetAction";

export default function Form() {
  const dispatch = useDispatch();
  // state
  const state = useSelector((state) => state.targets, shallowEqual);

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
      console.log("data ", data);
      dispatch(fetchTarget(data));
    },
  });

  // console.dir(state);
  // console.log(data, error, loading);

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
            <div className="px-6 py-6">
              <div className="text-center mb-2">
                <h1 className="font-bold text-sm text-grey-darkest leading-loose">
                  Search for a target
                </h1>
                <div className="text-center py-4">
                  <form onSubmit={handleSubmit}>
                    <div className=" max-w-md mx-auto p-1 pr-0 flex items-center">
                      <input
                        type="text"
                        name="search"
                        value={inputs.search}
                        placeholder="target.com"
                        onChange={handleChange}
                        className="flex-1 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded shadow p-2 text-grey-dark mr-2 focus:outline-none focus:bg-white focus:border-gray-500"
                      />
                      <button
                        type="submit"
                        className="appearance-none bg-teal-500 text-white hover:bg-teal-800 text-md font-semibold tracking-wide uppercase p-2 rounded shadow hover:bg-indigo-light"
                      >
                        Search
                      </button>
                    </div>
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
