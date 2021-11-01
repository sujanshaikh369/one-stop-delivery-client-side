import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <div className="not-found">
        <img
          className="img-fluid w-50"
          src="https://cdn1.vectorstock.com/i/1000x1000/77/15/404-error-page-not-found-plug-graphic-background-vector-21467715.jpg"
          alt=""
        />
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
};

export default NotFound;
