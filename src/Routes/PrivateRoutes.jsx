import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";
import { Navigate } from "react-router-dom";
const PrivateRoutes = ({children}) => {

    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <span className="loading loading-spinner loading-xs"></span>
    }
    if(user){
      return  children
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;