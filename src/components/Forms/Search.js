// import { setSearchQuery } from "../../actions/dashAction";
import useForm from "../../constants/useForm";

export default function Form({ handleSearch }) {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    search: "",
  });

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
                  <form>
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
