import { target } from "./actionTypes";

// target
export const fetchTarget = (data) => {
  return {
    type: target.GET_TARGETS,
    payload: data,
  };
};

// search input
export const setSearchQuery = (data) => {
  return {
    type: target.SET_SEARCH_QUERY,
    payload: data,
  };
};
