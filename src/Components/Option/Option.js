import React from "react";
import "./Option.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Option = ({ option, rightWrong, rightWrongFunc }) => {
  const notify = () => toast(rightWrong);

  return (
    <div>
      <div
        onClick={(notify, () => rightWrongFunc)(option)}
        className="opt border rounded-3 m-1 p-2"
      >
        {option}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Option;
