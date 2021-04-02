import { asr } from "./actionTypes";

// target
export const fetchTarget = (data) => {
  return {
    type: asr.GET_TARGETS_SUCCESS,
    payload: data.allTargets,
  };
};

// search input
export const setSearchQuery = (data) => {
  return {
    type: asr.SEARCH_QUERY,
    payload: data,
  };
};
// Reset target state
export const resetQuery = () => ({
  type: asr.RESET_QUERY,
});
