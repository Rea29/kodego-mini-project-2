import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';


const CourseForm = (props) => {
  const [course, setcourse] = useState({
    CourseTitle: props.course ? props.course.CourseTitle : '',
    Instructor: props.course ? props.course.Instructor : '',
    Price: props.course ? props.course.Price : '',
    Date: props.course ? props.course.Date : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { CourseTitle, Instructor, Price, } = course;

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const values = [CourseTitle, Instructor, Price,];
    let errorMsg = '';
    console.log(course);
    // const course = {courseTitle: values.courseTitle, Instructor: values.Instructor, price: values.price};
    // const res= await axios.post("http://http://127.0.0.1/api/getUsers.php",course);
    axios.post('http://127.0.0.1/AddCourse.php', {
      CourseTitle: course.CourseTitle,
      Instructor: course.Instructor,
      Price: course.Price
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const course = {
        CourseTitle,
        Instructor,
        Price,

        Date: new Date()
      };
      props.handleOnSubmit(course);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setcourse((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;

      default:
        setcourse((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="container my-2">
      <div className="row">
    <div className="col-md-8  mx-auto px-3 py-5 bg-light rounded">

      <h1 className="text-center mb-3"> Add Course</h1>
      
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        
        <Form.Group controlId="name">
          <Form.Label>Course Title</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="CourseTitle"
            value={CourseTitle}
            placeholder="Enter course a Title"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="Instructor">
          <Form.Label>Course Instructor</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="Instructor"
            value={Instructor}
            placeholder="Enter name of Instructor"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Course Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="Price"
            value={Price}
            placeholder="Enter price of course"
            onChange={handleInputChange}
          />
          <br />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
    </div>
    </div>

    
  );
};

export default CourseForm;