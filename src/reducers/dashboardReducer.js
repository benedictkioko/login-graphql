import { dashboard } from "../actions/actionTypes";

const initialState = {
  totalCountries: "",
  totalTargets: "",
  totalDomains: "",
  totalServices: "",
};

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case dashboard.GET_STATS_SUCCESS:
      const State = {
        ...state,
        ...action.payload,
      };
      return State;
    default:
      return state;
  }
}
