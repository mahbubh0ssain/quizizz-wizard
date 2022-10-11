import Option from "../Option/Option";
import { BeakerIcon } from "@heroicons/react/24/solid";
const Topic = ({ questions }) => {
  const { options, question, correctAnswer } = questions;
  return (
    <div>
      <div className="card border-primary shadow mb-3">
        <h5 className="card-header">
          {question} <BeakerIcon className="h-6 w-6 text-blue-500" />
        </h5>
        <div className="card-body text-primary row row-cols-lg-2 row-cols-md-1  m-0">
          {options.map((option) => (
            <Option option={option}></Option>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topic;
