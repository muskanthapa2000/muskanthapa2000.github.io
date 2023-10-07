import React from "react";
import "./StatCard.css";
const StatCard = ({ percent, techtext }) => {
  return (
    <div className="container">
      <div className="round">
        <div className="statpercent">{percent}</div>
      </div>
      <div className="techtext">{techtext}</div>
    </div>
  );
};

export default StatCard;
