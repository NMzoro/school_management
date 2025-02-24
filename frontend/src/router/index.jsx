import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "../layouts/GuestLayout";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/guest/Home";
import Login from "../pages/guest/Login"
import NotFound from "../pages/guest/NotFound"
import AdminDashboard from "../pages/admin/AdminDashboard";

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
            path:'/dashboard/admin',
            element:<AdminDashboard/>
        }
        ]
    },
    {
        path:'*',
        element:<NotFound/>
    }
])