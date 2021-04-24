import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ handleSubmit, countries, country }) => {
  const [countryInput, setCountryInput] = useState(country);

  useEffect(() => {
    setCountryInput(country);
  }, [country]);

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerLeft">
          <h1 className="title">COVID 19 TRACKER</h1>
          <Link to="/information" className="link">
            Information
          </Link>
        </div>
        <div className="headerRight">
          <form
            onSubmit={(e) => handleSubmit(e, countryInput)}
            className="form"
          >
            <input
              placeholder="Select a country"
              className="input"
              type="text"
              list="countries"
              //   defaultValue={country}
              onChange={(e) => setCountryInput(e.target.value)}
              value={countryInput}
            />

            <button>Search</button>
          </form>
          <datalist
            className="select"
            id="countries"
            variant="outlined"
            defaultValue="worldwide"
          >
            <option value={"Worldwide"}>World</option>
            {countries.map((country, index) => (
              <option key={index} className="option" value={country.name}>
                {country.value}
              </option>
            ))}
          </datalist>
        </div>
      </div>
    </div>
  );
};

export default Header;
