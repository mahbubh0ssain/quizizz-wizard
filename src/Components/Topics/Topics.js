import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const topic = useLoaderData();
  return (
    <div className="container">
      <h2 className="text-center my-3">Quiz of {topic.data.name}</h2>
      {topic.data["questions"].map((questions) => (
        <Topic key={questions.id} questions={questions}></Topic>
      ))}
    </div>
  );
};

export default Topics;
