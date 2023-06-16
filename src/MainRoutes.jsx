import { createBrowserRouter } from "react-router-dom";
import HeaderCompo from "./components/HeaderCompo";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import React, { Suspense } from "react";
const AdminRoutes = React.lazy(() => { return import("./Admin/AdminRoutes")})

const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <HeaderCompo />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "contact",
                element: <ContactPage />,
            },
            {
                path: "login",
                element: <LoginRegisterPage />,
            },
            {
                path: "register",
                element: <LoginRegisterPage />,
            },
        ],
    },
    {
        path : "/admin/*",
        element : <Suspense fallback={ <h2>loading...</h2> }> <AdminRoutes/> </Suspense>

    }

])

export default MainRoutes