import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <h1>category news</h1>,
      },
    ],
  },

  {
    path: "/news",
    element: <h1>News</h1>,
  },

  {
    path: "/auth",
    element: <h1>Login</h1>,
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
