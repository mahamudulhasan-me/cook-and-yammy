/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Headroom from "react-headroom";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../../assets/images/yammyLogo.png";
import { AuthContext } from "../../../provider/AuthProvider";
import ActiveLink from "../ActiveLink/ActiveLink";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  //  handle user logout system
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.warning("User Logged Out");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <Headroom>
      {" "}
      <div className=" px-[10%] py-2 z-50 sticky top-0 text-white bg-slate-900 bg-opacity-70 flex items-center justify-between">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu font-semibold menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <ActiveLink to={"/"}>Home</ActiveLink>
                </li>
                <li>
                  <ActiveLink to={"/blog"}>Blog</ActiveLink>
                </li>
              </ul>
            </div>
            <Link>
              <img src={logo} alt="" className="w-3/5" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold">
              <li>
                <ActiveLink to={"/"}>Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to={"/blog"}>Blog</ActiveLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {user ? (
            <div className="flex gap-3 items-center">
              <div
                className="tooltip hover:tooltip-open tooltip-bottom"
                data-tip={user?.displayName}
              >
                <LazyLoad>
                  <img
                    src={user.photoURL}
                    alt=""
                    className="w-12 h-12 rounded-full ring ring-primary "
                  />
                </LazyLoad>
              </div>

              <button
                onClick={handleLogOut}
                className="px-3 py-2 bg-primary text-white font-semibold rounded-lg"
              >
                LogOut
              </button>
            </div>
          ) : (
            <Link
              to={"./signInSignUp"}
              className="px-5  py-3 bg-primary text-white font-semibold rounded-lg"
            >
              SignIn
            </Link>
          )}
        </div>
      </div>
    </Headroom>
  );
};

export default Header;
