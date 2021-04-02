import { asr } from "../actions/actionTypes";

const initialState = {
  allTargets: null,
  n: 100,
  offset: 0,
  search: null,
};

export default function asrReducer(state = initialState, action) {
  switch (action.type) {
    case asr.SEARCH_QUERY:
      return {
        ...state,
        search: action.payload,
      };

    case asr.GET_TARGETS_SUCCESS:
      return {
        ...state,
        allTargets: action.payload,
      };

    case asr.RESET_QUERY:
      return initialState;

    default:
      return state;
  }
}
