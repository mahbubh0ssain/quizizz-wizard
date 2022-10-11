import "./Topic.css";
import Option from "../Option/Option";
import { EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Topic = ({
  questions,
  rightCount,
  setRightCount,
  wrongCount,
  setWrongCount,
}) => {
  const { options, question, correctAnswer } = questions;
  const notify = () => toast.success(correctAnswer);

  const rightWrongFunc = (option) => {
    if (option === correctAnswer) {
      setRightCount(rightCount + 1);
    } else {
      setWrongCount(wrongCount + 1);
    }
  };
  return (
    <div>
      <div className="card border-primary shadow mb-3">
        <div className="d-flex justify-content-between align-items-center bg-primary p-3">
          <h5 className="text-white">{question}</h5>
          <button className="btn">
            <EyeIcon onClick={notify} className="icon text-white"></EyeIcon>
            <ToastContainer />
          </button>
        </div>
        <div className="card-body text-primary row row-cols-lg-2 row-cols-md-1  m-0">
          {options.map((option, i) => (
            <Option
              key={i}
              option={option}
              correctAnswer={correctAnswer}
              rightWrongFunc={rightWrongFunc}
            ></Option>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topic;
