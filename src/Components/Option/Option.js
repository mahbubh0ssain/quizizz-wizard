import React, { useState } from "react";
import "./Option.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Option = ({ option, rightWrongFunc, answer }) => {
  const notify = (answer) => toast(answer);
  const [disable, setDisable] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          rightWrongFunc(option);
          notify(answer);
          setDisable(true);
        }}
        disabled={disable}
        className="opt text-start border rounded-3 m-1 p-2"
      >
        <ToastContainer />
        {option}
      </button>
    </div>
  );
};

export default Option;
