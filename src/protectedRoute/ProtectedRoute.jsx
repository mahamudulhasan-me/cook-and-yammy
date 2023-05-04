/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import preloader from "../assets/images/preloader.gif";
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
    return (
      <p>
        <div className="flex h-screen justify-center items-center ease-in-out transition-all">
          <img src={preloader} alt="" className="md:w-2/6 " />
        </div>
      </p>
    );
  }
  return children;
};

export default ProtectedRoute;
