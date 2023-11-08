import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import AllServices from "../../pages/AllServices/AllServices";
import AddService from "../../pages/AddService/AddService";
import ServiceDetails from "../../pages/AllServices/ServiceDetails/ServiceDetails";
import ManageServices from "../../pages/ManageServices/ManageServices";
import UpdateService from "../../pages/ManageServices/UpdateService";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        path: '/all-services/:id',
        element: <ServiceDetails />,
        loader: ({params})=> fetch(`https://b8a11-server-side-protamim.vercel.app/services/${params.id}`)
      },
      {
        path: '/add-service',
        element: <AddService />
      },
      {
        path: '/manage-services',
        element: <ManageServices />
      },
      {
        path: '/update/:id',
        element: <UpdateService />,
        loader: ({params})=> fetch(`https://b8a11-server-side-protamim.vercel.app/services/${params.id}`)
      }
    ],
  },
]);

export default MainRoutes;
