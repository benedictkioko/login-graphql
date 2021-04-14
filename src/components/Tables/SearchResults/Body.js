import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { FETCH_TARGET_DETAILS } from "../../../graphql/query/target";
import { useLazyQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { initGetTarget, getTargetDetails } from "../../../actions/targetAction";
import { errMsg } from "../../../actions/errorAction";

export default function Body({ data }) {
  const dispatch = useDispatch();
  const [id, setId] = useState("");

  const history = useHistory();

  const [
    TargetDetails,
    { data: resData, loading: isLoading, error },
  ] = useLazyQuery(FETCH_TARGET_DETAILS, {
    variables: {
      id: id,
    },
    onCompleted: (resData) => {
      // dispatch(resetQuery());
      // errorStore.message && dispatch(resetErrors());
      dispatch(getTargetDetails(resData));
      history.push(`/app/asr/attack-surface/${id}`);
    },
    onError: (error) => {
      dispatch(errMsg(error));
    },
  });

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("data-rowid");
    await setId(id);
    await TargetDetails();
    // await history.push(`/app/asr/attack-surface/${id}`);
  };

  return (
    <>
      <tbody>
        <tr
          key={data.id}
          // data-rowid={data.id}
          // onClick={handleSubmit}
          className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-gray-200 hover:bg-gray-100"
        >
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {data.name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {data.country.country}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {data.target}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {data.ip}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <i
              className={
                data.status === "up" || "Up"
                  ? "fas fa-arrow-up fill-current text-green-500"
                  : "fas fa-arrow-down fill-current text-red-500"
              }
            ></i>{" "}
            {data.status === "up" || "Up" ? (
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500 text-gray-800">
                up
              </span>
            ) : (
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500 text-gray-800">
                down
              </span>
            )}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <Link
              className="text-indigo-600 hover:text-indigo-900"
              data-rowid={data.id}
              onClick={handleSubmit}
            >
              View
            </Link>
          </td>
        </tr>
      </tbody>
    </>
  );
}
