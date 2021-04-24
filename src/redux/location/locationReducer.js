import { LocationTypes } from "./locationTypes";

const INITIAL_STATE = {
  countries: [],
  country: "Worldwide",
  dataTable: [],
};

const locationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LocationTypes.SET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case LocationTypes.SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case LocationTypes.SET_LOCATION_TABLE:
      return {
        ...state,
        dataTable: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
