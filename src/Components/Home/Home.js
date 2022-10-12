import React from "react";
import { useLoaderData } from "react-router-dom";
import FrontPage from "../FrontPage/FrontPage";
import "./Home.css";
const Home = () => {
  const topics = useLoaderData();

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center p-3">
        <div className=" w-25">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/58/Quizziz_Logo.png"
            alt="logo"
            className=" img-fluid"
          />
        </div>
        <div className="w-100 ms-3 header-txt">
          <blockquote>
            Welcome to the world of quiz. This is the biggest quiz website in
            the world. Here you find yourself joyful. Sometimes you'll get
            puzzled. My idea of relaxation is not lying down by a beach. I have
            to move around, do stuff. Though I'm a massive quiz show person.
          </blockquote>
        </div>
      </div>

      <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 ">
        {topics.data.map((topic) => (
          <FrontPage key={topic.id} topic={topic}></FrontPage>
        ))}
      </div>
    </div>
  );
};

export default Home;
