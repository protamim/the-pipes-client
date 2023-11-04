import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";


const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <h2>404 page under construction</h2>,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
])

export default MainRoutes;