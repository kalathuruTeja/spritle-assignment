import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ loginUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginFunction = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter email");
      return;
    }

    if (!password) {
      alert("Please enter password");
      return;
    }

    let usersList = localStorage.getItem("usersList");
    if (usersList) {
      usersList = JSON.parse(localStorage.getItem("usersList"));
    } else {
      usersList = [];
    }

    const currentUser = usersList.find((eachUser) => eachUser.email === email);

    if (!currentUser) {
      alert("User not found, please singup");
      return;
    }

    if (currentUser.password !== password) {
      alert("Password incorrect, please try again!!!");
      return;
    }

    loginUser(currentUser);
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="wrapper login-center">
        <form className="login-form">
          <div className="section-title paddingTopDesktop-thirty">
            <h2 className="title">Login / Signin</h2>
            <div></div>
          </div>
          <div className="input-container">
            <input
              type="email"
              className="primary-input full-width-mobile full-width-desktop"
              value={email}
              placeholder="enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              className="primary-input full-width-mobile full-width-desktop"
              value={password}
              placeholder="enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-container text-center">
            <button className="button-primary-dark" onClick={loginFunction}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;