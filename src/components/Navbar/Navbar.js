import User from "../Dropdowns/User";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { number } from "prop-types";

export default function Navbar() {
  const user = useSelector((state) => state.auth.user, shallowEqual);
  const getLastItem = (thePath) =>
    thePath.substring(thePath.lastIndexOf("/") + 1);

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center md:flex hidden justify-between md:flex-no-wrap  flex-wrap md:px-10 px-4">
          {/* Brand */}
          <Link
            to="/admin/dashboard"
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            onClick={(e) => e.preventDefault()}
          >
            Home
          </Link>

          <svg
            className="flex-shrink-0 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="md:flex hidden text-white text-sm uppercase lg:inline-block font-semibold">
            {getLastItem(window.location.pathname).length < 5
              ? "Attack Surface".toUpperCase()
              : getLastItem(window.location.pathname).toUpperCase()}
          </span>
          {/* Greetings */}
          <div className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <h3 className="text-white font-bold">
                Welcome {user.username.toUpperCase()},
              </h3>
            </div>
          </div>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <User />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
