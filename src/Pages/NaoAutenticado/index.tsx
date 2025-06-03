
import { Navigate, Outlet } from "react-router";
import { RequestToken } from "../../data/LocalStorage/requestToken"

export default function NaoAutenticado () {
    
    const token = RequestToken.getRequestToken();
     const sessionToken = RequestToken.getRequestSession();
    
    return token && sessionToken ? <Navigate to='/principal'/> : <Outlet/> 
    
}