import { useContext } from "react";
import { authUserContext } from "./AuthUserContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(authUserContext);

  if (!user.email) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoute;
