import React from "react";
import "./CardPanel.css";

const CardPanel = ({ title, totalCases, casesToday }) => {
  return (
    <div className="cardPanel">
      <h3 className="cardPanel__title">{title}</h3>
      <h2
        style={{
          color:
            title.toLowerCase() === "recovered"
              ? "#5efc03"
              : title.toLowerCase() === "deaths"
              ? "red"
              : "white",
        }}
        className="cardPanel__cases"
      >
        {totalCases}
      </h2>
      {casesToday && (
        <p className="cardPanel__casesToday">+{casesToday} Today</p>
      )}
      <p className="cardPanel__textTotal">Total Cases</p>
    </div>
  );
};

export default CardPanel;
