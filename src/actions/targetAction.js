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
    type: target.SEARCH_QUERY,
    payload: data,
  };
};
// Reset target state
export const resetQuery = () => ({
  type: target.RESET_QUERY,
});
