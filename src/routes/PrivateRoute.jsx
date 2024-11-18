import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const loaction = useLocation();
    console.log(loaction.pathname);
    

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-10">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={loaction.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;
