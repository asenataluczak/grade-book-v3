import React from "react";
import { Navigate } from "react-router-dom";
import {useSelector} from "react-redux";

const Protected = ({ condition, children }) => {
  const { userInfo } = useSelector((state) => state.auth);

  if (!condition(userInfo)) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default Protected;
