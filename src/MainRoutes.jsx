import { createBrowserRouter } from "react-router-dom";
import HeaderCompo from "./components/HeaderCompo";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const MainRoutes = createBrowserRouter([
    {
        path: "/" ,
        element : <HeaderCompo/> ,
        errorElement : <ErrorPage /> ,
        children : [
            {
                index : true ,
                element : <HomePage /> ,
            },
            {
                path : "/about" ,
                element : <AboutPage /> ,
            },
            {
                path : "/contact" ,
                element : <ContactPage /> ,
            },
        ],
    },
    // {
    //     // path : "/login",
    //     // element :  ,
    // },
])

export default MainRoutes