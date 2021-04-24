import { LocationTypes } from "./locationTypes";

export const setAllCountries = (countries) => ({
  type: LocationTypes.SET_ALL_COUNTRIES,
  payload: countries,
});

export const setCountry = (country) => ({
  type: LocationTypes.SET_COUNTRY,
  payload: country,
});

export const setLocationTable = (data) => ({
  type: LocationTypes.SET_LOCATION_TABLE,
  payload: data,
});

export const setLocationDataGraph = (data) => ({
  type: LocationTypes.SET_LOCATION_DATA_GRAPH,
  payload: data,
});
