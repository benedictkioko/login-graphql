import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-gray-300" />
          <div className="flex flex-wrap items-center md:justify-between left-auto">
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <Link
                    to="/admin/dashboard"
                    className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                  >
                    Copyright © {new Date().getFullYear()} Powered by SCOT
                    Platform
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
