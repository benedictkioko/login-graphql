import { dashboard } from "../actions/actionTypes";

const initialState = {
  allTargets: [],
  n: 50,
  offset: 0,
  search: "",
};

export default function targetReducer(state = initialState, action) {
  switch (action.type) {
    case dashboard.SET_SEARCH_QUERY:
      const newSearchState = {
        ...state,
        search: action.payload,
      };
      return newSearchState;
    case dashboard.GET_TARGETS:
      const newState = {
        ...state,
        ...action.payload,
      };
      return newState;
    case dashboard.TARGET_QUERY_SUCCESS:
      return {
        ...state,
        allTargets: action.payload,
      };

    default:
      return state;
  }
}
