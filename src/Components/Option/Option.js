import React from "react";
import "./Option.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Option = ({ option, rightWrongFunc, answer }) => {
  const notify = () => toast(answer);

  return (
    <div>
      <div
        onClick={() => {
          notify();
          rightWrongFunc(option);
        }}
        className="opt border rounded-3 m-1 p-2"
      >
        <ToastContainer />

        {option}
      </div>
    </div>
  );
};

export default Option;
