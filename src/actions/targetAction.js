import { target } from "./actionTypes";

// Target
export const fetchCountries = (data) => {
  return {
    type: target.TARGET_CREATE_SUCCESS,
    payload: data,
  };
};

export const initGetTarget = (data) => {
  return {
    type: target.INITIAL_GET_SUCCESS,
    payload: data,
  };
};

export const getTargetDetails = (data) => {
  return {
    type: target.GET_TARGETS_DETAILS_SUCCESS,
    payload: data,
  };
};
