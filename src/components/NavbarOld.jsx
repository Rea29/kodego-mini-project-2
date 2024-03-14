import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <nav className="navbar navbar-expand-lg py-4 bg-light">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          Nica Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleClick}
        >
          <i
            className={isClicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5" id="secondNav">
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/profile">
                <i className="fa-solid fa-user mx-2"></i>Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/wishlist">
                <i className="fa-solid fa-heart mx-2"></i>Wishlist
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/bag">
                <i className="fa-solid fa-bag-shopping mx-2"></i>Bag
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
