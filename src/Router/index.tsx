import { createBrowserRouter, Navigate } from "react-router";
import { LayoutHome } from "../Layout/NaoAutenticado/Home";
import { Home } from "../Pages/NaoAutenticado/Home";
import LayoutNaoAutenticado from "../Layout/NaoAutenticado/Login";
import Login from "../Pages/NaoAutenticado/Login";
import LayoutAutenticado from "../Layout/Autenticado";
import Principal from "../Pages/Autenticado/Principal";
import Registrar from "../Layout/NaoAutenticado/Login/Registrar";


export const Router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutHome />, 
        children: [
            {
                index: true,
                element: <Navigate to='/home' replace />
            },
            {
                path: '/home',
                element: <Home/>
            },
        ]
    },
    {
        path: '/',
        element: <LayoutNaoAutenticado />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'Registrar',
                element: <Registrar />
            }
        ]
    },
    {
        path: '/',
        element: <LayoutAutenticado />, 
        children: [
            {
                path: 'principal',
                element: <Principal/>
            }
        ]
    },

    {
        path: '*', 
        element: <Navigate to='/'/>
    }
])