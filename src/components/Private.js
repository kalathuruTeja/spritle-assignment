import React from "react";
import { Navigate } from "react-router-dom";

const Private = ({ children, currentUser }) => {
  

  return currentUser ? children : <Navigate to="/login" />;
  //   const currentUser = localStorage.getItem("loggedUser");
};

export default Private;