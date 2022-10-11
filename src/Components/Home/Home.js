import React from "react";
import { useLoaderData } from "react-router-dom";
import FrontPage from "../FrontPage/FrontPage";

const Home = () => {
  const topics = useLoaderData();

  return (
    <div className="container">
      <div className="d-flex justify-content-around align-items-center p-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Quizziz_Logo.png"
          alt="logo"
          className="img-fluid"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id nemo
          maxime itaque sequi ipsum rem quasi nisi sit quidem.
        </p>
      </div>

      <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1">
        {topics.data.map((topic) => (
          <FrontPage key={topic.id} topic={topic}></FrontPage>
        ))}
      </div>
    </div>
  );
};

export default Home;