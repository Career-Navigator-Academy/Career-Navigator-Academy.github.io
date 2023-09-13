import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import Programs from "./pages/Programs";
import Partner from "./pages/Partner";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/404";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Index() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/about",
      element: <Products />,
    },
    {
      path: "/project",
      element: <Programs />,
    },
    {
      path: "/contact",
      element: <Partner />,
    },
    {
      path: "/resume",
      element: <Resources />,
    },
    {
      path: "/resume",
      element: <Contact />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
      <CssBaseline />
    </React.StrictMode>
  );
}

root.render(<Index />);
