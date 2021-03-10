/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import Notification from "../Dropdowns/Notification.js";
import User from "../Dropdowns/User.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars" style={{ color: "red" }}></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-lg uppercase font-bold p-4 px-0"
            to="/admin/dashboard"
          >
            Hello <span className="text-red-600">Cyber</span>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <Notification />
            </li>
            <li className="inline-block relative">
              <User />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
                    to="/admin/dashboard"
                  >
                    Hello <span className="text-sm text-red-600">Cyber</span>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 h-12 border border-solid  border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-red-500 hover:text-red-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/app/target") !== -1
                      ? "text-red-500 hover:text-red-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/app/target"
                >
                  <i
                    className={
                      "fas fa-jedi mr-2 text-sm " +
                      (window.location.href.indexOf("/app/target") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Target
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/app/stats") !== -1
                      ? "text-red-500 hover:text-red-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/app/stats"
                >
                  <i
                    className={
                      "fas fa-sort-numeric-up mr-2 text-sm " +
                      (window.location.href.indexOf("/app/stats") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Statistics
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}

            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/app/asr") !== -1
                      ? "text-red-500 hover:text-red-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/app/asr"
                >
                  <i
                    className={
                      "fas fa-project-diagram mr-2 text-sm " +
                      (window.location.href.indexOf("/app/asr") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  ASR
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/app/exploitation") !== -1
                      ? "text-red-500 hover:text-red-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/app/exploitation"
                >
                  <i
                    className={
                      "fas fa-pastafarianism mr-2 text-sm " +
                      (window.location.href.indexOf("/app/exploitation") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Exploitation
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/app/spectrum") !== -1
                      ? "text-red-500 hover:text-red-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/app/spectrum"
                >
                  <i
                    className={
                      "fas fa-globe mr-2 text-sm " +
                      (window.location.href.indexOf("/app/spectrum") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  SPECTRUM
                </Link>
              </li>
              <hr className="my-4 md:min-w-full" />
              <li className="items-center">
                <Link
                  className="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
                  to="/admin/reports"
                >
                  <i className="fas fa-flag text-gray-500 mr-2 text-sm"></i>{" "}
                  REPORTS
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
                  to="/admin/help"
                >
                  <i className="fas fa-link text-gray-500 mr-2 text-sm"></i>{" "}
                  HELP
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
