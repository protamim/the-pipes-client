import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import AllServices from "../../pages/AllServices/AllServices";
import AddService from "../../pages/AddService/AddService";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>404 page under construction</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/view-details",
        element: (
          <PrivateRoute>
            <h3>View details content goes here</h3>
          </PrivateRoute>
        ),
      },
      {
        path: '/all-services',
        element: <AllServices />
      },
      {
        path: '/add-service',
        element: <AddService />
      }
    ],
  },
]);

export default MainRoutes;
