import { target } from "./actionTypes";

// target
export const fetchTarget = (data) => {
  return {
    type: target.GET_TARGETS_SUCCESS,
    payload: data.allTargets,
  };
};

// search input
export const setSearchQuery = (data) => {
  return {
    type: target.SET_SEARCH_QUERY,
    payload: data,
  };
};
