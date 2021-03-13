import React from "react";
import { Link } from "react-router-dom";

export default function Body({ data }) {
  return (
    <>
      <tbody>
        <tr
          key={data.id}
          className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
        >
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {data.name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {data.target}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {data.ip}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
            {data.status}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <Link to="" className="text-indigo-600 hover:text-indigo-900">
              Edit
            </Link>
          </td>
        </tr>
      </tbody>
    </>
  );
}
