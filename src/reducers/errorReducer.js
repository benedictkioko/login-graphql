import { error } from "../actions/actionTypes";

const initialState = {
  graphQLErrors: null,
  networkError: null,
  message: null,
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case error.ERROR_MESSAGE:
      return {
        ...state,
        ...action.payload,
      };
    case error.RESER_ERROR:
      return initialState;

    default:
      return state;
  }
}
