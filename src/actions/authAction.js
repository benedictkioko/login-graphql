import { auth } from "./actionTypes";

// login

export const userLogin = (data) => ({
  type: auth.LOGIN_SUCCESS,
  payload: data,
});

export const userRegister = (data) => ({
  type: auth.REGISTER_SUCCESS,
  payload: data,
});

export const userLogout = (data) => ({
  type: auth.LOGOUT_SUCCESS,
});
