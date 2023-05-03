import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import preloader from "../assets/images//preloader.gif";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";
import { AuthContext } from "../provider/AuthProvider";

const Main = () => {
  const { loading } = useContext(AuthContext);
  // const loading = true;
  return (
    <div>
      {loading ? (
        <div className="flex h-screen justify-center items-center ease-in-out transition-all">
          <img src={preloader} alt="" className="w-2/6 " />
        </div>
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Main;
