import { createBrowserRouter, Navigate } from "react-router";
import { LayoutHome } from "../Layout/NaoAutenticado/Home";
import { Home } from "../pages/NaoAutenticado/Home";
import LayoutNaoAutenticado from "../Layout/NaoAutenticado/Login";
import Login from "../pages/NaoAutenticado/Login";
import LayoutAutenticado from "../Layout/Autenticado";
import Principal from "../pages/Autenticado/Principal";
import Registrar from "../Layout/NaoAutenticado/Login/Registrar";
import NaoAutenticado from "../pages/NaoAutenticado";
import Autenticado from "../pages/Autenticado";


export const Router = createBrowserRouter([
    {
        path: '/',
        element: <NaoAutenticado/>, 
        children: [
            {
                path: '/',
                element: <LayoutHome/>,
                children: [
                    {
                        index: true,
                        element: <Home/>
                    },
                    {
                        path: '/home',
                        element: <Home/>
                    },
                ]
            },
            {
                path: '/',
                element: <LayoutNaoAutenticado/>,
                children: [
                    {
                        path: 'login',
                        element: <Login/>,
                    },
                    {
                        path: 'registrar',
                        element: <Registrar/>
                    }
                ]
            },
            {
                path: '*',
                element: <Navigate to={'/home'}/>
            }
        ]
    },
    {
        path: '/',
        element: <Autenticado/>,
        children: [
            {
                path: '/',
                element: <LayoutAutenticado/>,
                children: [
                    {
                        path: '/principal',
                        element: <Principal/>
                    }
                ]
            },
            {
                path: '*',
                element: <Navigate to={'/principal'} />
            }
        ]
    }  
])