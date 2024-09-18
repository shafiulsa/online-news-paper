import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Regester from "../Pages/Regester/Regester";
import News from "../Pages/Shared/News/News";
import PrivetRout from "./PrivetRout";

 const router =createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children : [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('/news.json')

            },
            {
                path: '/news/:id',
                element:<PrivetRout> <News></News> </PrivetRout>

            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/regester',
                element: <Regester></Regester>
            }
        ]

    }
 ]);


 export default router;