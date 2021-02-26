import { auth } from "./actionTypes";

// login

export const userLogin = (data) => ({
  type: auth.LOGIN_SUCCESS,
  payload: data,
});
