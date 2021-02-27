import { auth } from "../actions/actionTypes";

const initialState = {
  accessToken: null,
  isAuthenticated: false,
  refreshToken: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case auth.LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.tokenAuth.token,
        isAuthenticated: true,
        refreshToken: action.payload.tokenAuth.refreshToken,
      };
    case auth.REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    case auth.LOGIN_FAIL:
    case auth.REGISTER_FAIL:
    case auth.LOGOUT_SUCCESS:
      localStorage.removeItem("accessToken");

      return {
        accessToken: null,
        isAuthenticated: false,
        refreshToken: null,
      };
    default:
      return state;
  }
}
