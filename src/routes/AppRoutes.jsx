import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Posts from "../pages/Post.jsx";
import About from "../pages/About.jsx";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
                { index: true, element: <Home /> },
                { path: "posts", element: <Posts /> },
                { path: "about", element: <About /> },
            ],
    }
])

export default AppRoutes;