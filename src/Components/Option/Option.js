import React from "react";
import "./Option.css";

const Option = ({ option, rightFunc }) => {
  return (
    <div>
      <div
        onClick={() => rightFunc(option)}
        className="opt border rounded-3 m-1 p-2"
      >
        {option}
      </div>
    </div>
  );
};

export default Option;
