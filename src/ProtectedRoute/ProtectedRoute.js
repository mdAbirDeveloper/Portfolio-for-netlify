import React, { useContext } from "react";
import { AuthContext } from "../Authenticatio/Authenticatio";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const isAdmin = user?.email === "jalal.profession@gmail.com";
  // console.log(user);
  return <div>{isAdmin && children}</div>;
};

export default ProtectedRoute;
