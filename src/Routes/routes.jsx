import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Jobs from "../Page/Jobs/Jobs";
import { About } from "../Page/About/About";
import Contact from "../Page/Contact/Contact";
import Favorite from "../Page/Favorite/Favorite";
import SignUp from "../Page/SignUp/SignUp";
import SignOut from "../Page/Sign Out/SignOut";
import App from "../App";
import ErrorPage from "../Page/ErrorPage/ErrorPage";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children: [
            {
            path:"/",
            element:<Home/>
        },
        {
            path:"/jobs",
            element:<Jobs/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/favorite",
            element:<Favorite/>
        },
        
        {
            path:"/signup",
            element:<SignUp/>
        },
        {
            path:"/signout",
            element:<SignOut/>
        },]
    },
    {
        path:"*",
        element:<ErrorPage/>

    },
    
    

])
export default routes