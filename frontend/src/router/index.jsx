import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "../layouts/GuestLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AdminDashboard from '../espace/admin/AdminDashboard'
import AdminLayout from "../layouts/AdminLayout";

export const router = createBrowserRouter([
    {
        element:<GuestLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            }
        ]
    },
    {
        element:<AdminLayout/>,
        children:[
            {
                path:'/admin/dashboard',
                element:<AdminDashboard/>
            }
        ]
    }
])