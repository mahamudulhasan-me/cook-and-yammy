import React, { useContext, useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bg from "../../../assets/images/loginBg.jpg";
import logo from "../../../assets/images/yammyLogo.png";
import { AuthContext } from "../../../provider/AuthProvider";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import Register from "../Register/Register";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signInPage, setSignInPage] = useState(true);
  const [error, setError] = useState("");

  // user data from auth contex
  const { logInWithGoogle, logInWithGithub, loginWithEmailAndPassword } =
    useContext(AuthContext);
  // navigate redirect location
  const navigate = useNavigate();

  // login with google
  const handleGoogleSignIn = () => {
    logInWithGoogle()
      .then((user) => {
        const loggedUser = user.user;
        toast(`Welcome ${loggedUser.displayName}`);
        navigate("/");
      })
      .catch((error) => setError(error.message));
  };

  //login with github
  const handleGitHubSignIn = () => {
    logInWithGithub()
      .then((user) => {
        const loggedUser = user.user;
        toast(`Welcome ${loggedUser.displayName}`);
        navigate("/");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        toast(error);
      });
  };

  // login with email and password

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-[calc(100vh-5rem)] py-5 bg-cover bg-slate-900 bg-blend-overlay flex justify-center items-center"
    >
      <div className="w-3/5 mx-auto">
        <div className=" flex bg-slate-300 gap-1 px-6 py-3 rounded-t-xl">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
        </div>
        <div className="grid grid-cols-12  ">
          <div className="col-span-5 bg-slate-950 bg-opacity-60 p-10 text-white">
            <img src={logo} alt="" className="mt-5" />
            <p className="font-semibold mt-4 mb-10">
              Login using social media to get quick access
            </p>
            <div className="space-y-5">
              <Link
                onClick={handleGoogleSignIn}
                className="socialLogin bg-green-600"
              >
                <FaGoogle /> SignIn With Google
              </Link>
              <Link
                onClick={handleGitHubSignIn}
                className="socialLogin bg-[#171515]"
              >
                <FaGithub /> SignIn With GitHub
              </Link>
              <Link className="socialLogin bg-[#4267B2]">
                <FaFacebook /> SignIn With Facebook
              </Link>
            </div>
          </div>

          <div className="col-span-7 bg-white   p-10">
            {signInPage ? (
              <>
                <SectionHead>Login to your Account</SectionHead>
                <form className="space-y-4 w-4/5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="signInUp-input"
                  />
                  <br />
                  <div className="relative">
                    <input
                      type={`${showPassword ? "text" : "password"}`}
                      name="password"
                      placeholder="Password"
                      className="signInUp-input"
                    />
                    <div
                      className="absolute top-5 text-xl right-0 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                  </div>
                  <br />
                  <div className="flex justify-between items-center">
                    <div>
                      <input type="checkbox" />
                      <label htmlFor=""> Remember Me</label>
                    </div>
                    <Link className="text-blue-600 hover:underline">
                      Forget Password?
                    </Link>
                  </div>
                  <button className="bg-primary text-white font-semibold w-full rounded-md py-3">
                    Login with email
                  </button>
                  <p className="text-center">
                    Don&apos;t have an account?{" "}
                    <Link
                      className="text-blue-600 hover:underline"
                      onClick={() => setSignInPage(!signInPage)}
                    >
                      Sign Up Free!
                    </Link>
                  </p>
                </form>
              </>
            ) : (
              <Register setSignInPage={setSignInPage} signInPage={signInPage} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
