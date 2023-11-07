import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes/MainRoutes.jsx";
import AuthProvider from "./Providers/AuthProvider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={MainRoutes} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
