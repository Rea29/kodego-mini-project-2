import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Shop = () => {
  const [data, setData] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  useEffect(() => {
    axios
      .get("https://realyn.onrender.com/course")
      .then((res) => {
        console.log(res);

        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1 className=" display-5 fw-bold text-center mt-5" id="CourseList">
        Courses offers!
      </h1>
      <div
        className="row justify-content-center gap-4 mx-auto my-5"
        id="product"
      >
        {data.map((val) => (
          <div className="card" style={{ width: "18rem" }} key={val.id}>
            <img src={val.image} className="card-img-top" alt="cloth" />
            <div className="card-body">
              <h6 className="text-left">{val.title}</h6>
              <h5 className="text-left">₱{val.price}</h5>
              <h5 className="text-left">Instructor: {val.instructor}</h5>
              {[...Array(Math.floor(val.ratings))].map((star, index) => {
                return <FaStar className="star" color={"#ffc107"} size={20} />;
              })}

              <center>
                <Link to="/" className="btn btn-primary mt-2">
                  Enroll Now!
                </Link>
              </center>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
