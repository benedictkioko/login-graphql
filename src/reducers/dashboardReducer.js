import { dashboard } from "../actions/actionTypes";

const initialState = {
  dashStats: null,
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
