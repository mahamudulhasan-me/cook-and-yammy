import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

// create auth context
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  // create provider
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const [user, setUser] = useState({});
  //   Handle Google Sign in
  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // handle github sign in
  const logInWithGithub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };
  // create new user with email and password
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //handle sign in with email and password
  const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // handle user logout
  const logOut = () => {
    return signOut(auth);
  };
  //   check user login or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    user,
    logInWithGoogle,
    logInWithGithub,
    createNewUser,
    loginWithEmailAndPassword,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
