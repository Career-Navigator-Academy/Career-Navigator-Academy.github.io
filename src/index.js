import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import Programs from "./pages/Programs";
import Partner from "./pages/Partner";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/404";
import NavBar from "./components/AppBar";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Index() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/programs",
      element: <Programs />,
    },
    {
      path: "/partner",
      element: <Partner />,
    },
    {
      path: "/resources",
      element: <Resources />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <React.StrictMode>
      <CssBaseline />
      <NavBar />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

root.render(<Index />);
