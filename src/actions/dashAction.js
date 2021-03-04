import { dashboard } from "./actionTypes";

// target

export const fetchTarget = (data) => ({
  type: dashboard.GET_TARGETS,
  payload: data,
});
