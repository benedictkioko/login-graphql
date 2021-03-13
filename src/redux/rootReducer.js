import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import dashboardReducer from "../reducers/dashboardReducer";
import targetReducer from "../reducers/targetReducer";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  key: "root",
  auth: authReducer,
  dashStats: dashboardReducer,
  targets: targetReducer,
  storage: storage,
});

export default (state, action) =>
  action.type === "LOGOUT_SUCCESS"
    ? rootReducer(undefined, action)
    : rootReducer(state, action);
