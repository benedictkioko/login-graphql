import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo-500.png";
import { useMutation } from "@apollo/react-hooks";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { REGISTER_MUTATION } from "../graphql/mutation/auth";
import { userRegister } from "../actions/authAction"; //action creater

const Register = ({ history }) => {
  // component state
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirm_password: "",
    email: "",
    isChecked: false,
    isSubmitted: false,
  });

  const [CreateUser] = useMutation(REGISTER_MUTATION);
  // dispatch actions
  const dispatch = useDispatch();
  // access app/redux state
  const state = useSelector((state) => state, shallowEqual);

  const handleChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  // Register functionality
  const Register = (e) => {
    e.preventDefault();
    CreateUser({
      variables: {
        username: inputs.username,
        password: inputs.password,
        email: inputs.email,
      },
    }).then((res) => {
      dispatch(userRegister(res.data));
      // history.push("/");
    });
  };

  // block going back to login once authenticated
  useEffect(() => {
    if (state.auth.isAuthenticated) {
      history.push("/");
    } else {
      history.push("/register");
    }
  }, [history, state.auth.isAuthenticated]);

  const handleCheck = (e) => {
    setInputs({
      isChecked: e.target.isChecked,
    });
  };

  return (
    <div className="min-h-screen p-5 bg-gray-900 flex flex-col justify-center bg-fixed bg-hero-pattern">
      <div className="max-w-md min-h-1/2 w-full mx-auto">
        <div className="h-16 w-16 md:h-24 md:w-24 mx-auto rounded-full bg-white">
          <img src={logo} alt="logo" />
        </div>
        <div className="text-3xl font-bold text-white mt-2 text-center mt-3">
          Hello Cyber
        </div>
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-100 rounded">
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-gray-900 text-sm font-bold">Sign up</h6>
            </div>
          </div>
          <form className="space-y-6" onSubmit={Register}>
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-900 block mb-3"
              >
                Username
              </label>
              <input
                type="text"
                value={inputs.username}
                className="w-full p-2 border border-blue-300 rounded mt-1"
                onChange={handleChange}
                placeholder="username"
                name="username"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-900 block mb-3"
              >
                Email
              </label>
              <input
                type="email"
                value={inputs.email}
                className="w-full p-2 border border-blue-300 rounded mt-1"
                onChange={handleChange}
                placeholder="mail@example.com"
                name="email"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-900 block mb-3"
              >
                Password
              </label>
              <input
                type="password"
                value={inputs.password}
                className="w-full p-2 border border-blue-300 rounded mt-1 mb-3"
                onChange={handleChange}
                placeholder="secure password"
                name="password"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-900 block mb-3"
              >
                Cornfirm Password
              </label>
              <input
                type="password"
                value={inputs.confirm_password}
                className="w-full p-2 border border-blue-300 rounded mt-1 mb-3"
                onChange={handleChange}
                placeholder="secure password"
                name="confirm_password"
              />
              {inputs.password !== inputs.confirm_password ? (
                <p className="text-sm text-red-600">Passwords did not match.</p>
              ) : null}
            </div>
            <div>
              <label class="inline-flex items-center cursor-pointer">
                <input
                  id="customCheckLogin"
                  type="checkbox"
                  class="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                />
                <span class="ml-2 text-sm font-semibold text-gray-700">
                  I agree with the{" "}
                  <a
                    href="#right-cyber"
                    class="text-red-500"
                    checked={inputs.isChecked}
                    handleChange={handleCheck}
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>
            <div>
              <button
                className="w-full py-2 px-4 bg-gray-900 hover:bg-green-900 mt-4 rounded-md text-white text-sm mb-3"
                disabled={inputs.password !== inputs.confirm_password}
              >
                CREATE ACCOUNT
              </button>
            </div>
          </form>
        </div>
        <div class="flex flex-wrap mt-6 relative">
          <div class="w-1/2"></div>
          <div class="w-1/2 text-right">
            <a class="text-gray-300" href="/login">
              <small>Have an account? Login</small>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
