import { error } from "./actionTypes";

// error
export const errMsg = (errors) => {
  return {
    type: error.ERROR_MESSAGE,
    payload: errors,
  };
};

export const resetErrors = () => ({
  type: error.RESER_ERROR,
});
