import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import "./Topics.css";
const Topics = () => {
  const topic = useLoaderData();
  const [rightCount, setRightCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  return (
    <div className="container">
      <div className="text-center">
        <h2 className="quiz-head d-inline-block  my-3 p-2 border rounded-3">
          Quiz of {topic.data.name}
        </h2>
      </div>

      <div className="text-center mb-3">
        <div className="d-inline-block p-2 border rounded-3">
          <div className="rw-txt d-flex align-items-center">
            <h5 className="text-success">Right {rightCount}</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="arrow"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
            <h5 className="text-danger">Wrong {wrongCount}</h5>
          </div>
        </div>
      </div>
      {topic.data["questions"].map((questions, i) => (
        <Topic
          key={questions.id}
          count={i}
          questions={questions}
          wrongCount={wrongCount}
          rightCount={rightCount}
          setWrongCount={setWrongCount}
          setRightCount={setRightCount}
        ></Topic>
      ))}
    </div>
  );
};

export default Topics;
