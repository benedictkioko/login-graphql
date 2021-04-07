import { dashboard } from "../actions/actionTypes";

const initialState = {
  dashStats: null,
  sectors: null,
  countries: null,
};

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case dashboard.GET_STATS_SUCCESS:
      return {
        ...state,
        dashStats: action.payload,
      };

    case dashboard.GET_SECTORS_SUCESS:
      return {
        ...state,
        sectors: action.payload,
      };

    case dashboard.GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
      };

    default:
      return state;
  }
}
