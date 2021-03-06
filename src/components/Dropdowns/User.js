import React from "react";
import { createPopper } from "@popperjs/core";
import { Link } from "react-router-dom";

const User = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <Link
        to="/admin/dashboard"
        className="text-gray-600 block"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-gray-300 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg bg-red-600"
              // src="https://ui-avatars.com/api/?format=svg"
              src="https://ui-avatars.com/api/?name=Benedict+Kioko"
            />
          </span>
        </div>
      </Link>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <Link
          to="/profile"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
          onClick={(e) => e.preventDefault()}
        >
          Profile
        </Link>
        <Link
          to=""
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
          onClick={(e) => e.preventDefault()}
        >
          Settings
        </Link>
        <div className="h-0 my-2 border border-solid border-gray-200" />
        <Link
          to=""
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-gray-400 hover:text-white text-gray-900"
          }
          onClick={(e) => e.preventDefault()}
        >
          Logout
        </Link>
      </div>
    </>
  );
};

export default User;
