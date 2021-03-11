import React from "react";
import { Link } from "react-router-dom";

export default function SearchResults({ data }) {
  return (
    <>
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
          {data?.map((x) => {
            return (
              <tr
                key={x.id}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
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
                  <Link to="" className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
