import { dashboard } from "../actions/actionTypes";

const initialState = {
  dashStats: {
    totalCountries: 0,
    totalTargets: 0,
    totalDomains: 0,
    totalServices: 0,
  },
};

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case dashboard.GET_STATS_SUCCESS:
      return {
        ...state,
        dashStats: action.payload,
      };

    default:
      return state;
  }
}
