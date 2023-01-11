import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ loginUser }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const createUser = (e) => {
    e.preventDefault();

    if (!fullName || !email || !password || !role) {
      alert("Please fill all fields");
    }

    const newUser = {
      id: new Date().getTime().toString(),
      fullName,
      email,
      password,
      role,
    };

    const oldUsers = localStorage.getItem("usersList");
    if (oldUsers) {
      const currentOldUsers = JSON.parse(localStorage.getItem("usersList"));
      const newUsers = [...currentOldUsers, newUser];
      localStorage.setItem("usersList", JSON.stringify(newUsers));
    } else {
      const newUsers = [newUser];
      localStorage.setItem("usersList", JSON.stringify(newUsers));
    }

    loginUser(newUser);
    navigate("/");
  };

  return (
    <div className="register-container">
      <div className="wrapper register-center">
        <form className="register-form">
          <div className="section-title paddingTopDesktop-thirty">
            <h2 className="title">Register / Signup</h2>
            <div></div>
          </div>
          <div className="input-container">
            <input
              type="text"
              className="primary-input full-width-mobile full-width-desktop"
              placeholder="enter your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
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
          <div className="input-container">
            <input
              type="test"
              className="primary-input full-width-mobile full-width-desktop"
              value={role}
              placeholder="enter your role (master or student)"
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="button-container text-center">
            <button className="button-primary-dark" onClick={createUser}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;