import React from "react";
import { Link } from "react-router-dom";
import Course from "./Course";

const Home = () => {
  return (
    <>
      <section
        className="d-flex flex-column align-items-center justify-content-center text-center"
        id="home"
      >
        <h1 className="display-4 fw-bold">WELCOME TO PHILCODERS </h1>
        <p className="fs-4 fw-bold">Coding Your Dreams Into Reality!</p>
        <Link to="/course">
          <button className="btn btn-primary mt-2">GET STARTED NOW!</button>
        </Link>
      </section>
      <Course />
    </>
  );
};

export default Home;
