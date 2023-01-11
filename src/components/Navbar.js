import React from "react";
import { Link } from "react-router-dom";

function Navbar({ currentUser, logoutUser }) {
  return (
    <nav className="nav-container">
      <div className="nav-center wrapper">
        <div className="logo-section">
          <Link className="logo" to="/">
            Calculator
          </Link>
        </div>
        <div className="nav-links-main">
          <ul className="nav-links">
            {currentUser && (
              <li>
                <Link className="nav-link" to="/">
                  Master
                </Link>
              </li>
            )}
            {!currentUser && (
              <li className="register">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            )}
            {!currentUser && (
              <li className="login">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="logout">
                <Link className="nav-link" to="/login" onClick={logoutUser}>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;