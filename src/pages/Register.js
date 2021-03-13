import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo-500.png";
import { useMutation } from "@apollo/react-hooks";
import { useForm } from "react-hook-form";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { REGISTER_MUTATION } from "../graphql/mutation/auth";
import { userRegister } from "../actions/authAction"; //action creater
import { Link } from "react-router-dom";

const Register = ({ history }) => {
  // react-hook-form
  const { register, handleSubmit, errors } = useForm({ mode: "onChange" });

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
  const handleRegister = (e) => {
    // e.preventDefault();
    CreateUser({
      variables: {
        username: inputs.username,
        password: inputs.password,
        email: inputs.email,
      },
    }).then((res) => {
      dispatch(userRegister(res.data));
      history.push("/login");
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
    <div className="min-h-screen p-5 bg-gray-900 flex flex-col justify-center bg-fixed bg-hero-large-blue">
      <div className="max-w-md min-h-1/2 w-full mx-auto">
        <div className="max-w-md w-full mx-auto mt-4 p-8 bg-custom rounded">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="h-16 w-16 md:h-24 md:w-24 mx-auto rounded-full bg-white">
              <img src={logo} alt="logo" />
            </div>
            <div className="text-3xl font-bold text-white mt-2 text-center">
              Hello <span className="font-bold text-red-600">Cyber</span>
            </div>
            <div className="text-center mt-2">
              <h6 className="text-white text-sm font-bold">Sign up</h6>
            </div>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit(handleRegister)}>
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-white block mb-3"
              >
                Username
              </label>
              <input
                ref={register({
                  required: true,
                  minLength: 6,
                  maxLength: 10,
                })}
                style={{ borderColor: errors.username ? "red" : "" }}
                type="text"
                value={inputs.username}
                className="w-full p-2 mb-3 border focus:ring-indigo-500 focus:border-indigo-500 border-blue-300 rounded mt-1"
                onChange={handleChange}
                placeholder="username"
                name="username"
              />
              {errors.username && (
                <p className="text-sm text-red-600">Enter a valid username</p>
              )}
            </div>
            <div>
              <label htmlFor="" className="text-sm font-bold text-white block">
                Email
              </label>
              <input
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
                style={{ borderColor: errors.email ? "red" : "" }}
                type="email"
                value={inputs.email}
                className="w-full p-2 mb-3 border border-blue-300 rounded mt-1"
                onChange={handleChange}
                placeholder="mail@example.com"
                name="email"
              />
              {errors.email && (
                <p className="text-sm text-red-600">Enter a valid email</p>
              )}
            </div>
            <div>
              <label htmlFor="" className="text-sm font-bold text-white block">
                Password
              </label>
              <input
                ref={register({
                  required: true,
                  minLength: 6,
                  maxLength: 15,
                })}
                style={{ borderColor: errors.password ? "red" : "" }}
                type="password"
                value={inputs.password}
                className="w-full p-2 mb-3 border border-blue-300 rounded mt-1"
                onChange={handleChange}
                placeholder="secure password"
                name="password"
              />
              {errors.password && (
                <p className="text-sm text-red-600">
                  Passwords must be longer than 6 characters
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-white block mb-3"
              >
                Confirm Password
              </label>
              <input
                type="password"
                value={inputs.confirm_password}
                className="w-full p-2 mb-3 border border-blue-300 rounded mt-1"
                onChange={handleChange}
                placeholder="secure password"
                name="confirm_password"
              />
              {inputs.password !== inputs.confirm_password ? (
                <p className="text-sm text-red-600">Passwords did not match.</p>
              ) : null}
            </div>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  ref={register({
                    required: true,
                  })}
                  id="customCheckLogin"
                  name="checkbox"
                  type="checkbox"
                  className="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                />
                <span className="ml-2 text-sm font-semibold text-white">
                  I agree with the{" "}
                  <a
                    href="#right-cyber"
                    className="text-red-500"
                    checked={inputs.isChecked}
                    handleChange={handleCheck}
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
              {errors.checkbox && (
                <p className="text-sm text-red-600">
                  You must agree to Privacy Policy to register.
                </p>
              )}
            </div>
            <div>
              <button
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-900 mt-4 rounded-md text-white text-sm mb-3"
                disabled={inputs.password !== inputs.confirm_password}
              >
                CREATE ACCOUNT
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-wrap mt-6 items-center">
          <div className="w-full text-center">
            <Link to="/login" className="text-gray-300">
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
