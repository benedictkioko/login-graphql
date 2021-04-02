import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo-500.png";
import { useMutation } from "@apollo/react-hooks";
import { useForm } from "react-hook-form";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { LOGIN_MUTATION } from "../graphql/mutation/auth";
import { userLogin } from "../actions/authAction";
import { Link } from "react-router-dom";
import { toast } from "react-toast";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state, shallowEqual);
  // react-hook-form
  const { register, handleSubmit, errors } = useForm({ mode: "onChange" });
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    isSubmitted: false,
  });
  const [tokenAuth, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const handleChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  // Login functionality
  const handleLogin = (e) => {
    // e.preventDefault();
    tokenAuth({
      variables: { username: inputs.username, password: inputs.password },
    })
      .then((res) => {
        dispatch(userLogin(res.data));
        history.push("/admin/dashboard");
        toast.success("Logged in Successfully.");
      })
      .catch((error) => {
        error.graphQLErrors?.map(({ message }) => toast.error(`${message}`));
        if (error.networkError) {
          toast.error(`${error.networkError}.`);
        }
      });
  };

  // block going back to login once authenticated
  useEffect(() => {
    if (state.auth.isAuthenticated) {
      history.push("/admin/dashboard");
    } else {
      history.push("/login");
    }
  }, [history, state.auth.isAuthenticated]);

  return (
    <div className="min-h-screen p-5 bg-gray-900 flex flex-col justify-center bg-hero-large-blue">
      <div className="max-w-md min-h-1/2 w-full mx-auto">
        <div className="max-w-md w-full mx-auto mt-4 p-8 bg-custom rounded">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="h-16 w-16 md:h-24 md:w-24 mx-auto rounded-full bg-white">
              <img src={logo} alt="logo" />
            </div>
            <div className="text-3xl font-bold text-white mt-2 text-center">
              Hello <span className="font-bold text-red-600">Cyber</span>
            </div>
            <div className="text-center mt-2 mb-3">
              <h6 className="text-white text-sm font-bold">Sign In</h6>
            </div>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
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
                })}
                type="text"
                value={inputs.username}
                className="w-full p-2 border border-blue-300 rounded mt-1 mb-3"
                onChange={handleChange}
                placeholder="Username"
                name="username"
              />
              {errors.username && (
                <p className="text-sm text-red-600">Enter a valid username</p>
              )}
            </div>
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-white block mb-3"
              >
                Password
              </label>
              <input
                ref={register({
                  required: true,
                })}
                type="password"
                value={inputs.password}
                className="w-full p-2 border border-blue-300 rounded mt-1 mb-3"
                onChange={handleChange}
                placeholder="Password"
                name="password"
              />
              {errors.password && (
                <p className="text-sm text-red-600">Enter a valid password</p>
              )}
            </div>
            <div>
              <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-900 mt-4 rounded-md text-white text-sm mb-3">
                Log in
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-wrap mt-6 items-center">
          <div className="w-full text-center">
            <Link to="/register" className="text-gray-300">
              Create new account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
