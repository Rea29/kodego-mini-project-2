import React, {useState} from "react";

function AddCourse ()
{
  const [formvalue, setFormvalue] = useState({CourseTitle:'',CourseInstructor:'',CourseTiltle: ''});
  const handleInput = (e)=> {
    setFormvalue({...formvalue, [e.target.name]:e.target.value});
  }
  const handleSubmit = ()=>{
    e.preventDefault();
    console.log(formvalue);
  }
  return(
    <React.Fragment>
      <div className="container my-2">
      <div className="row">
    <div className="col-md-8  mx-auto px-3 py-5 bg-light rounded">

      <h1 className="text-center mb-3"> Add Course</h1>
      
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleSubmit}>
        
        <Form.Group controlId="name">
          <Form.Label>Course Title</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="courseTitle"
            value={formvalue.CourseTiltle}
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
            value={formvalue.CourseInstructor}
            placeholder="Enter name of Instructor"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Course Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={formvalue.CoursePrice}
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
    </React.Fragment>
  )
}