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
import MySchedules from "../../pages/MySchedules/MySchedules";
import MyBooking from "../../pages/MySchedules/Booking/MyBooking";
import Pending from "../../pages/MySchedules/Pending/Pending";

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
        path: "/all-services",
        element: <AllServices />,
      },
      {
        path: "/all-services/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(
            `https://b8a11-server-side-protamim.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-services",
        element: (
          <PrivateRoute>
            <ManageServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateService />,
        loader: ({ params }) =>
          fetch(
            `https://b8a11-server-side-protamim.vercel.app/services/${params.id}`
          ),
      },
    ],
  },
  {
      path: "/my-schedules",
      element: (
        <PrivateRoute>
          <MySchedules />
        </PrivateRoute>
      ),
      children: [
        {
          path: '/my-schedules/booking',
          element: <MyBooking />,
        },
        {
          path: '/my-schedules/pending',
          element: <Pending />
        }
      ]
    
  }
]);

export default MainRoutes;
