import React, { useEffect, useState } from "react";
import CardPanel from "../CardPanel/CardPanel";
import "./PanelInfo.css";
import api from "../../axios/api";
import { connect } from "react-redux";
import { selectCountry } from "../../redux/location/locationSelector";

const PanelInfo = ({ country }) => {
  const [countryData, setCountryData] = useState();
  useEffect(() => {
    const url =
      country.toLowerCase() === "worldwide" ? "all" : `countries/${country}`;
    const getCountryData = async () => {
      await api
        .get(url)
        .then((response) => {
          setCountryData(response.data);
        })
        .catch((err) => window.alert("Harap masukan lokasi dengan benar"));
    };
    getCountryData();
    // eslint-disable-next-line
  }, [country]);

  return (
    <div className="panelInfo">
      {/* {console.log(countryData)} */}
      <CardPanel
        title="Cases"
        totalCases={countryData?.cases}
        casesToday={countryData?.todayCases}
      />
      <CardPanel
        title="Recovered"
        totalCases={countryData?.recovered}
        casesToday={countryData?.todayRecovered}
      />
      <CardPanel
        title="Deaths"
        totalCases={countryData?.deaths}
        casesToday={countryData?.todayDeaths}
      />
      <CardPanel
        title="Active"
        totalCases={countryData?.active}
        casesToday={countryData?.todayActive}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  country: selectCountry(state),
});

export default connect(mapStateToProps)(PanelInfo);
