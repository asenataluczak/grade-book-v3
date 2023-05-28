import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = ({ conditions, fallback, children }) => {
  const { userInfo } = useSelector((state) => state.auth);

  let result = 0;
  conditions.forEach((condition) => {
    if (condition(userInfo)) {
      return ++result;
    }
  });
  if (result) {
    return children;
  }
  return <Navigate to={`/${fallback}`} replace />;
};

export default Protected;
