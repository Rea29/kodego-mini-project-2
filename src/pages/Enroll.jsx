import React from "react";
import { useLocation } from "react-router-dom";
const Enroll = () => {
  const location = useLocation();
  //the data here will be an object since an object was
  const data = location;
  console.log("test enroll debug", data);
  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-md-8  mx-auto px-3 py-5 bg-light rounded">
          <h1 className="text-center mb-3">Enrollment Form</h1>
          <h4 className="text-center mb-3">{data.state.title}</h4>
          <h4 className="text-center mb-3">{data.state.instructor}</h4>
          <h6 className="text-center mb-3">{data.state.description}</h6>

          <form method="post" action="https://formspree.io/f/mayzyzov">
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">
                First Name
              </label>
              <input
                type="text"
                className="form-control shadow-none"
                autoComplete="off"
                required
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">
                Middle Name
              </label>
              <input
                type="text"
                className="form-control shadow-none"
                autoComplete="off"
                required
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">
                Last Name
              </label>
              <input
                type="text"
                className="form-control shadow-none"
                autoComplete="off"
                required
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">
                Email address
              </label>
              <input
                type="email"
                className="form-control shadow-none"
                autoComplete="off"
                required
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control shadow-none"
                autoComplete="off"
                required
                name="name"
              />
            </div>

            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
