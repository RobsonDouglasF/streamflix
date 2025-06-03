import { Navigate, Outlet } from "react-router";
import { RequestToken } from "../../data/LocalStorage/requestToken"

export default function Autenticado () {
    
    const token = RequestToken.getRequestToken();
    const sessionToken = RequestToken.getRequestSession();
    
    return token && sessionToken ? <Outlet/> : <Navigate to='/home'/>
    
}