import React from "react";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="text-center border p-3 rounded-3 shadow position-absolute top-50 start-50 translate-middle">
      <h1 className=" fs text-danger">404</h1>
      <h2>Page Not Found</h2>
    </div>
  );
};

export default NotFound;
