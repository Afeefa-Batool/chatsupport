import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  console.log(props.demo);
  const navigate = useNavigate();

  return (
    <div className="container-fluid text-center">
      <nav className="navbar navbar-expand-sm   navbar-dark bg-info">
        <div className="container-fluid ">
          <NavLink className="navbar-brand " to="/">
            Home
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ">
              {props.user ? (
                <li>
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    onClick={() => {
                      auth.signOut();
                      navigate("/signup");
                    }}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/signin"
                    >
                      Sign in
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" to="/signup">
                      Sign up
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
