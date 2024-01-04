import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config.js";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
export const AuthProvider = ({ children }) => {

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const authentication = {
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};
