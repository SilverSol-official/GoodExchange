import React from "react";

const TempItem = ({ props }) => {
  const { nameS, nameF, code, course, symbol } = props;

  return (
    <div className="tempItem">
      <div className="symbol">{symbol}</div>
      <div className="nameS">{nameS}</div>
      <div className="code">{code}</div>
      <div className="nameF">{nameF}</div>
      <div className="course">{course}</div>
    </div>
  );
};

export default TempItem;
