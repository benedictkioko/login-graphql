import { target } from "../actions/actionTypes";

const initialState = {
  allTargets: null,
  n: 100,
  offset: 0,
  search: null,
};

export default function targetReducer(state = initialState, action) {
  switch (action.type) {
    case target.SEARCH_QUERY:
      return {
        ...state,
        search: action.payload,
      };

    case target.GET_TARGETS_SUCCESS:
      return {
        ...state,
        allTargets: action.payload,
      };

    case target.RESET_QUERY:
      return initialState;

    default:
      return state;
  }
}
