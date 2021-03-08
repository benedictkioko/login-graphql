import User from "../Dropdowns/User";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <Link
            to="/admin/dashboard"
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </Link>
          {/* Greetings */}
          <div className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <h3 className="text-white font-bold">Welcome,</h3>
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
