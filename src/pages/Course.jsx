import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Shop = () => {
  const [dataBackUp, setDataBackUp] = useState([]);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function getCourses(category) {
    if (category == null || category == "All") {
      axios
        .get("https://realyn.onrender.com/course")
        .then((res) => {
          console.log(res);

          setData(res.data);
          setDataBackUp(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get("https://realyn.onrender.com/course?category=" + category)
        .then((res) => {
          console.log(res);

          setData(res.data);
          setDataBackUp(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  useEffect(() => {
    axios
      .get("https://realyn.onrender.com/category")
      .then((res) => {
        console.log(res);

        setCategory(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    getCourses(null);
  }, []);

  function filterByCategory(category) {
    getCourses(category);
  }
  function searchCourse(search) {
    setData(dataBackUp);
    if (search.length > 0) {
      //
      const filteredProducts = data.filter(
        (obj) =>
          obj.title.toLowerCase().includes(search.toLowerCase()) ||
          obj.description.toLowerCase().includes(search.toLowerCase())
      );
      setData(filteredProducts);
    } else {
      setData(dataBackUp);
    }
    // }
  }
  return (
    <div>
      <h1 className=" display-5 fw-bold text-center mt-5" id="CourseList">
        Courses offers!
      </h1>
      <div
        className="row justify-content-center gap-4 mx-auto my-5"
        id="product"
      >
        <Container fluid="md">
          <Row className="justify-content-md-center">
            <Col xs={2}>
              <InputGroup className="mb-3">
                <Form.Select
                  size="lg"
                  onChange={(event) => {
                    filterByCategory(event.target.value);
                  }}
                >
                  <option>
                    Categories
                  </option>
                  {category.map((val) => (
                    <option value={val.category} key={val.id}>
                      {val.category}
                    </option>
                  ))}
                </Form.Select>
              </InputGroup>
            </Col>
            <Col xs={5}>
              <InputGroup className="mb-3">
                <Form.Control
                  size="lg"
                  aria-label="Text input with dropdown button"
                  placeholder="Search"
                  onKeyUp={(event) => {
                    searchCourse(event.target.value);
                  }}
                />
              </InputGroup>
            </Col>
          </Row>
        </Container>

        {data.map((val) => (
          <div key={val.id} className="card" style={{ width: "18rem" }}>
            <img src={val.image} className="card-img-top mt-2 " alt="" />
            <div className="card-body">
              <h6 className="text-left">{val.title}</h6>
              <h5 className="text-left">₱{val.price}</h5>
              <h5 className="text-left">Instructor: {val.instructor}</h5>
              {[...Array(Math.floor(val.ratings))].map((star, index) => {
                return (
                  <FaStar
                    className="star"
                    color={"#ffc107"}
                    size={20}
                    key={index}
                  />
                );
              })}

              <center>
                <Link
                  to="/enrollment"
                  state={val}
                  className="btn btn-primary mt-2"
                >
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
