import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

// create auth context
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  //   Handle Google Sign in
  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //   check user login or not
  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
      return () => unsubscribe();
    };
  }, []);
  const authInfo = { user, logInWithGoogle };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
