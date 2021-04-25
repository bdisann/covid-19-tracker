import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./GraphPanel.css";
import api from "../../axios/api";
import {
  selectCountry,
  selectDataGraph,
} from "../../redux/location/locationSelector";
import { connect } from "react-redux";
import { setLocationDataGraph } from "../../redux/location/locationAction";

const GraphPanel = ({ country, setLocationDataGraph, dataGraph }) => {
  const [data, setData] = useState(29);

  const forConvertCase = (dataGraph) => {
    const cases = {
      xAxis: Object.keys(dataGraph[0]),
      yAxis: Object.keys(dataGraph[0]).map((key) => dataGraph[0][key]),
    };
    const deaths = {
      xAxis: Object.keys(dataGraph[1]),
      yAxis: Object.keys(dataGraph[1]).map((key) => dataGraph[1][key]),
    };
    const recovered = {
      xAxis: Object.keys(dataGraph[2]),
      yAxis: Object.keys(dataGraph[2]).map((key) => dataGraph[2][key]),
    };
    return [cases, deaths, recovered];
  };

  useEffect(() => {
    const url =
      country.toLowerCase() === "worldwide"
        ? "historical/all?lastdays=120"
        : `historical/${country}?lastdays=120`;

    const getTimeLineData = async () => {
      if (country.toLowerCase() === "worldwide") {
        await api
          .get(url)
          .then(({ data }) =>
            setLocationDataGraph(
              forConvertCase([data.cases, data.deaths, data.recovered])
            )
          )
          .catch((err) => console.log(err));
      } else {
        await api
          .get(url)
          .then(({ data }) => {
            const arrayData = Object.keys(data).map((key) => data[key])[2];
            console.log(arrayData);
            const { cases, deaths, recovered } = arrayData;
            setLocationDataGraph(forConvertCase([cases, deaths, recovered]));
          })
          .catch((err) => console.log(err));
      }
    };
    getTimeLineData();
    // eslint-disable-next-line
  }, [country]);
  return (
    <div className="graphPanel">
      <div className="graphPanel__button">
        <div className="graphPanel__buttonLeft">
          <h3>Look for:</h3>
        </div>
        <div className="graphPanel__buttonRight">
          <h4 onClick={() => setData(29)}>30 Days</h4>
          <h4 onClick={() => setData(89)}>90 Days</h4>
          <h4 onClick={() => setData(119)}>120 Days</h4>
        </div>
      </div>
      {dataGraph[0]?.xAxis?.length > 0 && (
        <Line
          options={{
            responsive: true,
            interaction: {
              mode: "index",
              intersect: false,
            },
            stacked: false,
            plugins: {
              title: {
                display: true,
                text: `Total Cases in ${country}`,
              },
            },
            scales: {
              x: [
                {
                  ticks: {
                    fontColor: "white",
                  },
                },
              ],
              y: {
                type: "linear",
                display: true,
                position: "left",
              },
            },
          }}
          data={{
            labels: dataGraph[0].xAxis.filter((x, index) => index <= data),
            datasets: [
              {
                label: "Cases",
                data: dataGraph[0].yAxis.filter((x, index) => index <= data),
                borderColor: "red",
                backgroundColor: "red",
                yAxisID: "y",
              },
            ],
          }}
          width={100}
          height={50}
        />
      )}
      <br />
      {dataGraph[0]?.xAxis?.length > 0 && (
        <Line
          options={{
            responsive: true,
            interaction: {
              mode: "index",
              intersect: false,
            },
            stacked: true,
            plugins: {
              title: {
                display: true,
                text: `Total Deaths and Recovered in ${country}`,
              },
            },
            scales: {
              y: {
                type: "linear",
                display: true,
                position: "left",
              },
              y1: {
                type: "linear",
                display: true,
                position: "right",

                // grid line settings
                grid: {
                  drawOnChartArea: false, // only want the grid lines for one axis to show up
                },
              },
            },
          }}
          data={{
            labels: dataGraph[0].xAxis.filter((x, index) => index <= data),
            datasets: [
              {
                label: "Deaths",
                data: dataGraph[1].yAxis.filter((x, index) => index <= data),
                borderColor: "red",
                backgroundColor: "red",
                yAxisID: "y",
              },
              {
                label: "Recovered",
                data: dataGraph[2].yAxis.filter((x, index) => index <= data),
                borderColor: "blue",
                backgroundColor: "blue",
                yAxisID: "y1",
              },
            ],
          }}
          width={100}
          height={50}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  country: selectCountry(state),
  dataGraph: selectDataGraph(state),
});

const mapDispatchToProps = (dispatch) => ({
  setLocationDataGraph: (data) => dispatch(setLocationDataGraph(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(GraphPanel);
