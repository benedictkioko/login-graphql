import { dashboard } from "./actionTypes";

// dashboard stats
export const dashStats = (data) => {
  return {
    type: dashboard.GET_STATS_SUCCESS,
    payload: data,
  };
};
