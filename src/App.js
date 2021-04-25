import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import api from "./axios/api";
import { useEffect } from "react";
import {
  setAllCountries,
  setLocationTable,
} from "./redux/location/locationAction";
import InformationPage from "./pages/InformationPage/InformationPage";

function App({ setAllCountries, setLocationTable }) {
  useEffect(() => {
    const getAllCountriesData = async () => {
      const callApi = await api.get("countries").then(({ data }) => {
        const countriesData = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso3,
          flag: country.countryInfo.flag,
        }));
        return { countriesData: countriesData, data: data };
      });
      setLocationTable(callApi.data);
      setAllCountries(callApi.countriesData);
    };
    getAllCountriesData();
  }, [setAllCountries, setLocationTable]);

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/information" exact component={InformationPage} />
      </Switch>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setAllCountries: (countries) => dispatch(setAllCountries(countries)),
  setLocationTable: (data) => dispatch(setLocationTable(data)),
});
export default connect(null, mapDispatchToProps)(App);
