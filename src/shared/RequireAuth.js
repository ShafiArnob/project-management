import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext"
function RequireAuth({children}) {
  const {user} = useAuthContext()
  const location = useLocation();
  if(!user){
    return <Navigate to="/login" state ={{from: location}} replace></Navigate>
  }
  return children
}

export default RequireAuth