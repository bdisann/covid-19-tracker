import React from "react";
import { connect } from "react-redux";
import { selectDataTable } from "../../redux/location/locationSelector";
import "./TableStat.css";

const TableStat = ({ dataTable }) => {
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
                <td>{data.country}</td>
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
});

export default connect(mapStateToProps)(TableStat);
