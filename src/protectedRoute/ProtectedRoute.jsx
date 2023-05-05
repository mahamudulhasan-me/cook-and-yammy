/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Shared/Loader/Loader";
import { AuthContext } from "../provider/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();
  if (!user) {
    return (
      <Navigate
        to={"/signInSignUp"}
        state={{ redirectPath: location?.pathname }}
        replace
      />
    );
  }
  if (isLoading) {
    return <Loader />;
  }
  return children;
};

export default ProtectedRoute;
