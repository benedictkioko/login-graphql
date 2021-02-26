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
    default:
      return state;
  }
}
