import React, { useEffect } from "react";
import { createPopper } from "@popperjs/core";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { useMutation } from "@apollo/react-hooks";
import { LOGOUT_MUTATION } from "../../graphql/mutation/auth";
import { userLogout } from "../../actions/authAction";

const User = () => {
  // state
  const state = useSelector((state) => state, shallowEqual);
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

  const [revokeToken] = useMutation(LOGOUT_MUTATION);
  const dispatch = useDispatch();
  const history = useHistory();

  // Logout functionality
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch(userLogout());
    history.push("/login");
  };

  // block going back to login once authenticated
  // useEffect(() => {
  //   if (state.auth.isAuthenticated) {
  //     history.push("/admin/dashboard");
  //   } else {
  //     history.push("/login");
  //   }
  // }, [history, state]);

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
              src={
                "https://ui-avatars.com/api/?name=" + state.auth.user.username
              }
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
          onClick={handleLogOut}
        >
          Logout
        </Link>
      </div>
    </>
  );
};

export default User;
