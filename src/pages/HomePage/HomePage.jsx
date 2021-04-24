import React from "react";

import "./HomePage.css";
import { connect } from "react-redux";
import { setCountry } from "../../redux/location/locationAction";
import {
  selectCountries,
  selectCountry,
} from "../../redux/location/locationSelector";
import Header from "../../components/Header/Header";
import PanelInfo from "../../components/PanelInfo/PanelInfo";
import TableStat from "../../components/TableStat/TableStat";

const HomePage = ({ countries, country, setCountry }) => {
  const handleSetCountry = (e, countryInput) => {
    e.preventDefault();
    setCountry(countryInput);
  };

  return (
    <div className="homePage">
      <Header
        countries={countries}
        handleSubmit={handleSetCountry}
        country={country}
      />
      <div className="homePage__body">
        <PanelInfo />

        <div className="homePage__statPanel">
          <div className="homePage__statPanelLeft">
            <h1>Map</h1>
            <h1>Graphp</h1>
          </div>
          <div className="homePage__statPanelRight">
            <h3 className="tableStat__title">Cases by Country</h3>
            <TableStat />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  countries: selectCountries(state),
  country: selectCountry(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCountry: (country) => dispatch(setCountry(country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);