import React from "react";

const Header = ({ score }) => {
  return (
    <div className="header">
      <div className="text">
        <span>TOSH</span>
        <span>QOG'OZ</span>
        <span>QAYCHI</span>
      </div>
      <div className="score-box">
        <span>Ball</span>
        <div className="score-box__score">{score}</div>
      </div>
    </div>
  );
};

export default Header;
