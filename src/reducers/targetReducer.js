import { target } from "../actions/actionTypes";

const initialState = {
  allTargets: {},
  n: 50,
  offset: 0,
  search: "",
};

export default function targetReducer(state = initialState, action) {
  switch (action.type) {
    case target.SET_SEARCH_QUERY:
      return {
        ...state,
        search: action.payload,
      };

    case target.GET_TARGETS_SUCCESS:
      return {
        ...state,
        allTargets: action.payload,
      };

    default:
      return state;
  }
}
