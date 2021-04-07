import React from "react";

export default function Header() {
  return (
    <>
      <thead className="bg-white py-4">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider"
          >
            Country
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider"
          >
            Domain
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider"
          >
            IP
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider"
          >
            Status
          </th>
          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
    </>
  );
}
