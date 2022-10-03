import React from "react";
import { Outlet, Navigate } from "react-router-dom";


const ProtectedRoutes = (props) => {
  return (
    props.loggedIn ? <Outlet /> : <Navigate to="/" />
  );
};

export default ProtectedRoutes; 