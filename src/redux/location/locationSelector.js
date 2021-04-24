import { createSelector } from "reselect";

const selectLocation = (state) => state.location;

export const selectCountries = createSelector(
  [selectLocation],
  (location) => location.countries
);

export const selectCountry = createSelector(
  [selectLocation],
  (location) => location.country
);

export const selectDataTable = createSelector(
  [selectLocation],
  (location) => location.dataTable
);
