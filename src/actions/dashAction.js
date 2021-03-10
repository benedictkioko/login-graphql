import { dashboard } from "./actionTypes";

// dashboard stats
export const dashStats = (data) => {
  return {
    type: dashboard.GET_STATS_SUCCESS,
    payload: data,
  };
};

// target
export const fetchTarget = (data) => {
  return {
    type: dashboard.GET_TARGETS,
    payload: data,
  };
};

// search input
export const setSearchQuery = (data) => {
  return {
    type: dashboard.SET_SEARCH_QUERY,
    payload: data,
  };
};
