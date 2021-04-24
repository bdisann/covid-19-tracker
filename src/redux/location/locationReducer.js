import { LocationTypes } from "./locationTypes";

const INITIAL_STATE = {
  countries: [],
  country: "Worldwide",
  dataTable: [],
  dataGraph: [],
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

    case LocationTypes.SET_LOCATION_DATA_GRAPH:
      return {
        ...state,
        dataGraph: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
