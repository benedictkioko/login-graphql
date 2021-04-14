import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toast";
import Select from "react-select";
import { useHistory } from "react-router-dom";

// custom hook
import useForm from "../../constants/useForm";

// graphql
import { FETCH_TARGET_DETAILS } from "../../graphql/query/target";
import { CREATE_TARGET_MUTATION } from "../../graphql/mutation/target";
import { errMsg } from "../../actions/errorAction";
import { getTargetDetails } from "../../actions/targetAction";
import { useLazyQuery } from "@apollo/client";

function TargetDefination() {
  const dispatch = useDispatch();
  const history = useHistory();

  // gloabl state
  const state = useSelector((state) => state, shallowEqual);

  const [sectorId, setSectorId] = useState();
  const [countryId, setCountryId] = useState();
  const [targetId, setTargetId] = useState("");

  // title case
  function titleCase(str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  }

  //  parse sectors
  const sectors =
    state.dashboard.sectors &&
    state.dashboard.sectors.map((sector) => {
      return { label: titleCase(sector.category), value: sector.id };
    });

  // parse contries
  const countries =
    state.dashboard.countries &&
    state.dashboard.countries.map((country) => {
      return { label: titleCase(country.country), value: country.id };
    });

  // initialization
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    name: "",
    target: "",
    ip: "",
    notes: "",
    status: "up",
    lat: 0,
    lng: 0,
    isSubmitted: false,
  });

  const [
    TargetDetails,
    { data: resData, loading: isLoading, error: isError },
  ] = useLazyQuery(FETCH_TARGET_DETAILS, {
    variables: {
      id: targetId,
    },
    onCompleted: (resData) => {
      // dispatch(resetQuery());
      // errorStore.message && dispatch(resetErrors());
      dispatch(getTargetDetails(resData));
      history.push(`/app/asr/attack-surface/${targetId}`);
    },
    onError: (isError) => {
      dispatch(errMsg(isError));
    },
  });

  const [createTarget, { data, loading, error }] = useMutation(
    CREATE_TARGET_MUTATION
  );

  // handle Login
  const handleSubmit = (e) => {
    e.preventDefault();
    createTarget({
      variables: {
        input: {
          name: inputs.name,
          target: inputs.target,
          sector: { id: sectorId },
          country: { id: countryId },
          ip: inputs.ip,
          status: inputs.status,
          notes: inputs.notes,
          lat: 0,
          lng: 0,
        },
      },
    })
      .then((res) => {
        // dispatch(userLogin(res.data));
        setTargetId(res.data.createTarget.target.id);
        TargetDetails();
        toast.success("Target addded successfully.");
      })
      .catch((error) => {
        error.graphQLErrors?.map(({ message }) =>
          message.includes("duplicate key error collection")
            ? toast.error(`Target already exist.`)
            : toast.error(`${message}`)
        );
        if (error.networkError) {
          toast.error(`${error.networkError}.`);
        }
      });
  };

  return (
    <>
      <div className="w-full">
        <h1 className=" justify-center font-bold text-sm text-green-600 leading-loose pb-4">
          Add Target
        </h1>
        <div className="items-center justify-center">
          <div className="container bg-white rounded-md shadow-lg px-4 mr-4">
            <div className="px-12 py-6">
              <div className="text-center mb-4">
                <div className="max-w-md items-center text-left py-4">
                  <form>
                    <div className="-mx-3 md:flex mb-6">
                      <div className="md:w-full px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold pb-4">
                          Entity
                        </label>
                        <input
                          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-500"
                          type="text"
                          name="name"
                          value={inputs.name}
                          onChange={handleChange}
                          placeholder=""
                          required
                        />
                        <p className="text-grey-dark text-xs italic">
                          Entity name must be unique.
                        </p>
                        {inputs.name.length === 0 ? <p>Required</p> : ""}
                      </div>
                    </div>
                    <div className="-mx-3 md:flex  py-2">
                      <div className="md:w-1/2 px-3  md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold pb-4">
                          Domain
                        </label>
                        <input
                          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-2 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-500"
                          type="text"
                          name="target"
                          value={inputs.target}
                          onChange={(e) => {
                            handleChange(e);
                            // getGeOIp(e.target.value);
                            // setInputs({ ...inputs, target: e.target.value });
                            // handleOnChangeSector(e);
                          }}
                          placeholder="domain.com"
                        />
                      </div>
                      <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold pb-4">
                          IP Address
                        </label>
                        <input
                          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                          type="text"
                          name="ip"
                          value={inputs.ip}
                          onChange={handleChange}
                          placeholder="192.168.0.1"
                        />
                        <p className="text-grey-dark text-xs italic">
                          (Optional) The system will resolve the domain
                          provided.
                        </p>
                      </div>
                    </div>
                    {/* sector */}
                    <div className="-mx-3 md:flex mb-6">
                      <div className="md:w-full px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold pb-4">
                          Sector
                        </label>
                        <div className="relative">
                          {state.dashboard.sectors && (
                            <Select
                              placeholder="Select..."
                              isSearchable
                              value={sectors.label}
                              options={sectors}
                              onChange={(sector) => setSectorId(sector.value)}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    {/* country */}
                    <div className="-mx-3 md:flex mb-2">
                      <div className="md:w-full px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold pb-4">
                          Country
                        </label>
                        <div className="relative">
                          {state.dashboard.countries && (
                            <Select
                              placeholder="Select..."
                              isSearchable
                              value={countries.label}
                              options={countries}
                              onChange={(country) =>
                                setCountryId(country.value)
                              }
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="-mx-3 md:flex  py-4">
                      <div className="md:w-full px-3">
                        <label
                          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 pb-4"
                          htmlFor="grid-password"
                        >
                          Notes
                        </label>

                        <textarea
                          className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                          type="text"
                          name="notes"
                          value={inputs.notes}
                          onChange={handleChange}
                          placeholder="Notes..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-between mt-6 relative">
                      <div className="md:w-1/2 px-3  md:mb-0">
                        <button
                          type="submit"
                          className="appearance-none bg-red-600 text-white hover:bg-red-600 text-base font-semibold tracking-wide uppercase p-2 rounded shadow hover:bg-indigo-light"
                        >
                          Cancel
                        </button>
                      </div>
                      <div className="md:w-1/2 px-3  md:mb-0">
                        <button
                          type="submit"
                          className="appearance-none bg-gray-900 text-white hover:bg-gray-600 text-base font-semibold tracking-wide uppercase p-2 rounded shadow hover:bg-indigo-light"
                          onClick={handleSubmit}
                          disabled={inputs.name === null}
                        >
                          Submit
                        </button>
                      </div>
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

export default TargetDefination;
