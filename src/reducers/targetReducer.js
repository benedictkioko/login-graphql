import { dashboard } from "../actions/actionTypes";

const initialState = {
  allTargets: [],
};

export default function targetReducer(state = initialState, action) {
  switch (action.type) {
    case dashboard.TARGET_QUERY_SUCCESS:
      return {
        ...state,
        allTargets: action.payload,
      };

    default:
      return state;
  }
}
