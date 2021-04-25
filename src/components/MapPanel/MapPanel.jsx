import React, { useEffect } from "react";
import "./MapPanel.css";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import {
  selectCountry,
  selectDataMap,
} from "../../redux/location/locationSelector";
import { connect } from "react-redux";

const MapPanel = ({ dataMap, country }) => {
  const mapRef = React.createRef();
  useEffect(() => {
    // setCountriesData(dataMap);
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYmRpc2FubiIsImEiOiJja253ZGJnaTIwODE4Mnd0ZzJtOTU0aWt2In0.j3wz9-mOmMfwMVXfGXJD1g";
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/light-v10",
      zoom: 1.5,
    });

    dataMap.map((data) => {
      const marker = new mapboxgl.Marker({ color: "red" })
        .setLngLat([data.countryInfo.long, data.countryInfo.lat])
        .addTo(map);
      return marker;
    });

    return () => {
      map.remove();
    };
    // eslint-disable-next-line
  }, [dataMap]);
  return (
    <div className="mapPanel__container">
      {/* {(countriesData?.length || countryLngLat?.length) && ( */}
      <div ref={mapRef} className="mapPanel"></div>
      <p>
        <i>(Spread on Map data)</i>
      </p>
      {/* )} */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataMap: selectDataMap(state),
  country: selectCountry(state),
});

export default connect(mapStateToProps)(MapPanel);
