import Option from "../Option/Option";
import { EyeIcon } from "@heroicons/react/24/solid";
import "./Topic.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Topic = ({ questions }) => {
  const [rightWrong, setRightWrong] = useState();
  const { options, question, correctAnswer } = questions;

  const notify = () => toast(correctAnswer);
  const rightWrongFunc = (option) => {
    if (option === correctAnswer) {
      setRightWrong("YAY! Your answer is right.");
    } else {
      setRightWrong("Oops! Your answer is false.");
    }
  };
  return (
    <div>
      <div className="card border-primary shadow mb-3">
        <div className="d-flex justify-content-between align-items-center bg-primary p-3">
          <h5>{question}</h5>
          <button onClick={notify} className="btn">
            <EyeIcon className="icon text-white"></EyeIcon>
            <ToastContainer />
          </button>
        </div>
        <div className="card-body text-primary row row-cols-lg-2 row-cols-md-1  m-0">
          {options.map((option, i) => (
            <Option
              key={i}
              option={option}
              rightWrong={rightWrong}
              rightWrongFunc={rightWrongFunc}
            ></Option>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topic;
