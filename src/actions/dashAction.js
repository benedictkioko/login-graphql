import { dashboard } from "./actionTypes";

// target

export const fetchTarget = (data) => {
  return {
    type: dashboard.GET_TARGETS,
    payload: data,
  };
};
export const setSearchQuery = (data) => {
  return {
    type: dashboard.SET_SEARCH_QUERY,
    payload: data,
  };
};
