import { target } from "../actions/actionTypes";

const initialState = {
  target: null,
  lat: 0,
  lng: 0,
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case target.TARGET_CREATE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    case target.FETCH_GEO_SUCESS:
      return {
        ...state,
        ...action.payload,
      };

    case target.INITIAL_GET_SUCCESS:
      return {
        ...state,
        id: action.payload,
      };

    case target.GET_TARGETS_DETAILS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    case target.RESET_FORM:
      return initialState;

    default:
      return state;
  }
}
