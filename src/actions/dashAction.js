import { dashboard } from "./actionTypes";

// dashboard stats
export const dashStats = (data) => {
  return {
    type: dashboard.GET_STATS_SUCCESS,
    payload: data,
  };
};

// sectors
export const fetchSectors = (data) => {
  return {
    type: dashboard.GET_SECTORS_SUCESS,
    payload: data,
  };
};

// countries
export const fetchCountries = (data) => {
  return {
    type: dashboard.GET_COUNTRIES_SUCCESS,
    payload: data,
  };
};

export const statsCountries = (data) => {
  return {
    type: dashboard.GET_COUNTRIES_STATS_SUCCESS,
    payload: data,
  };
};
