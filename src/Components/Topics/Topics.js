import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const topic = useLoaderData();

  return (
    <div>
      <h2>This is topics</h2>
      {topic.data["questions"].map((questions) => (
        <Topic key={questions.id} questions={questions}></Topic>
      ))}
    </div>
  );
};

export default Topics;
