import { dashboard } from "../actions/actionTypes";

const initialState = {
  totalCountries: 11,
  totalTargets: 12361,
  totalDomains: 92705,
  totalServices: 398,
};

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case dashboard.GET_STATS_SUCCESS:
      const State = {
        ...state,
        search: action.payload,
      };
      return State;
    default:
      return state;
  }
}
