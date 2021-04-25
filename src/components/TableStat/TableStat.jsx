import React from "react";
import { connect } from "react-redux";
import { setCountry } from "../../redux/location/locationAction";
import {
  selectCountry,
  selectDataTable,
} from "../../redux/location/locationSelector";
import "./TableStat.css";

const TableStat = ({ dataTable, setCountry, country }) => {
  const sortData = (data) => {
    const dataToSort = [...data];
    dataToSort.sort((a, b) => (a.cases > b.cases ? -1 : 1));

    return dataToSort;
  };
  return (
    <div className="tableStat">
      <div className="tableStat__container">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Country</th>
              <th>Cases</th>
            </tr>
          </thead>
          <tbody>
            {sortData(dataTable).map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td
                  style={{
                    cursor: "pointer",
                    color: country === data.country ? "red" : "black",
                  }}
                  onClick={(e) => setCountry(data.country)}
                >
                  {data.country}
                </td>
                <td>{data.cases}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataTable: selectDataTable(state),
  country: selectCountry(state),
});
const mapDispatchToProps = (dispatch) => ({
  setCountry: (country) => dispatch(setCountry(country)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TableStat);
