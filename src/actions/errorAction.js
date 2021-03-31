import { error } from "./actionTypes";

// error
export const errMsg = (errors) => {
  return {
    type: error.ERROR_MESSAGE,
    payload: errors,
  };
};

export const resetErrors = (errors) => ({
  type: error.RESET_ERRORS,
});
